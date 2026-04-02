import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ──────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── API Routes ─────────────────────────────────────────────────

// Health check
app.get("/api/healthz", (req, res) => {
  res.json({ status: "ok" });
});

// Contact form
app.post("/api/contact", async (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  const smtpPassword = process.env.SMTP_PASSWORD;
  if (!smtpPassword) {
    console.error("SMTP_PASSWORD is not set");
    return res.status(500).json({ success: false, error: "Email service not configured." });
  }

  const smtpUser = process.env.SMTP_USER || "techtitansai@zohomail.in";
  const smtpHost = process.env.SMTP_HOST || "smtp.zoho.in";
  const smtpPort = Number(process.env.SMTP_PORT) || 465;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  const mailOptions = {
    from: `"TechTitans AI" <${smtpUser}>`,
    to: process.env.CONTACT_RECIPIENT || "techtitansai@zohomail.in",
    replyTo: email,
    subject: `New Inquiry: ${service} — from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0B0F19; color: #ffffff; padding: 32px; border-radius: 12px;">
        <h2 style="color: #3B82F6; margin-top: 0;">New Contact Form Submission</h2>
        <hr style="border-color: rgba(255,255,255,0.1); margin-bottom: 24px;" />
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #9CA3AF; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 10px 0; color: #ffffff; font-weight: bold;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #9CA3AF; vertical-align: top;">Email</td>
            <td style="padding: 10px 0; color: #3B82F6;"><a href="mailto:${email}" style="color: #3B82F6;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #9CA3AF; vertical-align: top;">Service</td>
            <td style="padding: 10px 0; color: #22C55E; font-weight: bold;">${service}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #9CA3AF; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #ffffff;">${message.replace(/\n/g, "<br/>")}</td>
          </tr>
        </table>
        <hr style="border-color: rgba(255,255,255,0.1); margin-top: 24px;" />
        <p style="color: #6B7280; font-size: 12px; margin-bottom: 0;">Sent from TechTitans AI website contact form</p>
      </div>
    `,
  };

  try {
    await transporter.verify();
    await transporter.sendMail(mailOptions);
    console.log(`Contact form email sent from ${name} (${email}) - ${service}`);
    res.json({ success: true, message: "Email sent successfully." });
  } catch (err) {
    console.error("Failed to send contact form email:", err.message || err);
    console.error("SMTP config used:", { host: smtpHost, port: smtpPort, user: smtpUser });
    res.status(500).json({ success: false, error: "Failed to send email. Please try again." });
  }
});

// ── Serve Static Frontend ──────────────────────────────────────
const staticPath = path.join(__dirname, "dist");
app.use(express.static(staticPath));

// SPA fallback — serve index.html for all non-API routes
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// ── Start Server ───────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`TechTitans AI server running on port ${PORT}`);
});
