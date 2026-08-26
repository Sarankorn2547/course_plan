import { Injectable } from "@nestjs/common";

@Injectable()
export class CalendarService {
  getConnectionStatus() {
    return {
      connected: false,
      provider: "google",
      message: "Google OAuth is scaffolded for MVP integration.",
    };
  }
}
