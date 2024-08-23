import React from "react";
import { AppProps } from "next/app";
import { TicketProvider } from "../app/TicketContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TicketProvider>
      <Component {...pageProps} />
    </TicketProvider>
  );
}

export default MyApp;