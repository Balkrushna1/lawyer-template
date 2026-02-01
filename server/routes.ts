import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Mock API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertInquirySchema.parse(req.body);
      await storage.createInquiry(data);
      res.json({ success: true, message: "Message received" });
    } catch (e) {
      res.status(400).json({ error: "Invalid data" });
    }
  });

  return httpServer;
}
