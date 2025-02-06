import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive.file",
];

export class GoogleSheetsService {
  private doc: GoogleSpreadsheet;

  constructor() {
    const jwt = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: SCOPES,
    });

    this.doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, jwt);
  }

  async addContactFormEntry(data: {
    name: string;
    email: string;
    message: string;
  }) {
    await this.doc.loadInfo();
    const sheet = this.doc.sheetsByIndex[0];

    await sheet.addRow({
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      message: data.message,
    });
  }
}
