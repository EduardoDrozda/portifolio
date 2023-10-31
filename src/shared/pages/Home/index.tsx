"use client";

import { About, Contact, Footer, Home, Stacks } from "@shared/components";
import { useEmail } from "@shared/context";
import { Email } from "@shared/types";
import { useCallback } from "react";


import "react-toastify/dist/ReactToastify.css";

export function HomePage() {
  const { isLoading, handleSendEmail } = useEmail();

  const handleEmail = useCallback(
    async (v: Email) => {
      await handleSendEmail(v);
    },
    [handleSendEmail]
  );

  return (
    <>
      <Home />
      <About />
      <Stacks />
      <Contact isLoading={isLoading} handleSendEmail={handleEmail} />
      <Footer />
    </>
  );
}
