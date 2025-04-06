import express from "express";
import nodemailer from "nodemailer";

let router = express.Router();

router.get("/", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>We got email from you.</h1>");
  res.send();
});

router.post("/", async (req, res) => {
  let { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    let mailMe = async () => {
      const info = await transporter.sendMail({
        from: `no-reply`,
        to: `nischaygadher15@gmail.com`,
        subject: `NKG Portfoilo Inquiry From: ${name}`,
        text: `
            Name: ${name},
            Email: ${email},
            Message: ${message},
        `,
      });
    };
    mailMe();

    res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    res.write(JSON.stringify({ status: true }));
    res.send();
  } catch (err) {
    console.log(err.message);
  }
});

export default router;
