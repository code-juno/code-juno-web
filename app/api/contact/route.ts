import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import { z } from "zod";

// Mailchimp error type definition
type MailchimpError = {
  status: number;
  response: {
    body: {
      title: string;
      status: number;
      detail: string;
    };
  };
};

// Initialize Mailchimp with your API key
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., "us21"
});

// Contact form schema validation
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Add subscriber to Mailchimp list
    try {
      await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID!, {
        email_address: validatedData.email,
        status: "subscribed",
        merge_fields: {
          FNAME: validatedData.name.split(" ")[0],
          LNAME: validatedData.name.split(" ").slice(1).join(" ") || "",
        },
        tags: ["Portfolio Contact Form"],
      });
    } catch (error) {
      // Type guard to check if error is a MailchimpError
      const isMailchimpError = (err: unknown): err is MailchimpError =>
        typeof err === "object" &&
        err !== null &&
        "response" in err &&
        typeof err.response === "object" &&
        err.response !== null &&
        "body" in err.response &&
        typeof err.response.body === "object" &&
        err.response.body !== null &&
        "title" in err.response.body;

      // If the user is already subscribed, don't treat it as an error
      if (
        isMailchimpError(error) &&
        error.response.body.title === "Member Exists"
      ) {
        // User already exists in the list, we can continue
      } else {
        console.error("Mailchimp error:", error);
        throw error;
      }
    }

    // Here you could also implement additional functionality:
    // - Send yourself a notification email
    // - Store the message in a database
    // - Integrate with other services

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data", errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
