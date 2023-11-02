import { Email } from "@shared/types";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DEFAULT_EMAIL = process.env.NEXT_PUBLIC_SMTP_TO!;
const HOST = process.env.NEXT_PUBLIC_SMTP_HOST;
const PORT = process.env.NEXT_PUBLIC_SMTP_PORT;
const USER = process.env.NEXT_PUBLIC_SMTP_USER;
const PASS = process.env.NEXT_PUBLIC_SMTP_PASS;

export async function POST(request: Request) {
  try {
    const { name, email, about, message, phone }: Email = await request.json();
    const transporter = nodemailer.createTransport({
      host: HOST,
      secure: true,
      port: Number(PORT) || 465,
      auth: {
        user: USER,
        pass: PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `Admin ${DEFAULT_EMAIL}`,
      to: [...DEFAULT_EMAIL.split(",")],
      subject: about,
      html: `<!DOCTYPE html>
      <html lang="pt-br">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Contact Email</title>
      
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet"
          />
      
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
      
            .section {
              background-color: #512da8;
              min-height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 50px;
            }
      
            .container {
              background-color: #24144c;
              width: 100%;
              border-radius: 4px;
              padding: "0 20px";
            }
      
            .content {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 30px 60px;
            }
      
            .image {
              width: 300px;
              height: 300px;
              margin-top: -20%;
            }
      
            .title {
              font-size: 5rem;
              color: #ff5733;
              margin-top: 50px;
              font-family: "Poppins", "Courier New", Courier, monospace;
            }
      
            .message {
              width: 100%;
              text-align: center;
              margin-top: 40px;
              font-family: "Poppins", "Courier New", Courier, monospace;
              font-size: 1rem;
              color: #ffffff;
            }
      
            .address {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              font-family: "Poppins", "Courier New", Courier, monospace;
              font-size: 1rem;
              color: #ffffff;
              margin-top: 20px;
            }
      
            .hr {
              border: 1px solid black;
              margin-top: 50px;
            }
        </style>
        </head>
        <body>
          <div class="section">
            <div class="container">
              <div class="content">
                <img
                  src="https://res.cloudinary.com/dvvmzete7/image/upload/v1698718873/Portifolio/cdg2uw5nv35zgzcll9n5.png"
                  class="image"
                />
                <h1 class="title">${about}</h1>
                <p class="message">${message}</p>
                <address class="address">
                  <span>Nome: ${name}</span>
                  <span>Email: ${email}</span>
                  <span>telefone: ${phone}</span>
                </address>
              </div>
            </div>
          </div>
        </body>
      </html>
      `,
    });

    return NextResponse.json(info);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
