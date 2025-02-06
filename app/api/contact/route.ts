import { NextResponse } from "next/server";
import { z } from "zod";
import { RateLimiter } from "@/utils/rateLimit";
import { GoogleSheetsService } from "@/services/googleSheets";
import { contactFormSchema } from "@/schemas/contact";

const RATE_LIMIT_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS = 3; // 3 requests per hour

const rateLimiter = new RateLimiter(RATE_LIMIT_DURATION, MAX_REQUESTS);
const sheetsService = new GoogleSheetsService();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";

    if (rateLimiter.isLimited(ip)) {
      const limitInfo = rateLimiter.getLimitInfo(ip)!;
      return NextResponse.json(
        {
          message: "Rate limit exceeded",
          resetTime: limitInfo.resetTime,
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    await sheetsService.addContactFormEntry(validatedData);

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
