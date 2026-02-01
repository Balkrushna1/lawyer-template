import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertInquirySchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form endpoint - no database, just validates and returns success
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertInquirySchema.parse(req.body);
      // Simply return success - no database storage
      res.json({ success: true, message: "Thank you for your inquiry. We will contact you soon!" });
    } catch (e) {
      res.status(400).json({ error: "Invalid data" });
    }
  });

  return httpServer;
}
