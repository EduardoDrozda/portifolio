import { Email } from "@shared/types";

export async function sendEmail(data: Email) {
  const url = process.env.NEXT_PUBLIC_API_ENDPOINT || "";
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  await fetch(`${url}/email`, options);
}
