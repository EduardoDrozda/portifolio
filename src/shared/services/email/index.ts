import { Email } from "@shared/types";

const URL = process.env.NEXT_PUBLIC_API_ENDPOINT || "";

export async function sendEmail(data: Email) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  await fetch(`${URL}/email`, options);
}
