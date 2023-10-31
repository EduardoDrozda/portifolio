"use client";

import { EmailContextProvider } from "@shared/context";
import { HomePage } from "@shared/pages";

export default function Home() {
  return (
    <EmailContextProvider>
      <HomePage />
    </EmailContextProvider>
  );
}
