import React from "react";
import FrontPage from "../app/FrontPage";
import { TicketProvider } from "../app/TicketContext";

export default function Home() {
  return (
    <TicketProvider>
      <div>
        <FrontPage />
      </div>
    </TicketProvider>
  );
}