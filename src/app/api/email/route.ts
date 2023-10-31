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
      to: [DEFAULT_EMAIL],
      subject: "Hello World",
      html: "<strong>It works!</strong>",
    });

    return NextResponse.json(info);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
