"use client";
import React, { useEffect, useState } from "react";
import { GetTickets, Ticket, ErrorResponse, CloseTicket } from "@/app/pages/api/DataBaseConnection";

export default function TicketPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTickets() {
      const result = await GetTickets();

      if ('error' in result) {
        setError(result.error);
      } else {
        setTickets(result);
      }
    }
    fetchTickets();
  }, []);

  const handleCloseTicket = async (id: number) => {
    const result = await CloseTicket(id);
    if (result && result.error) {
      alert(result.error);
    } else {
      setTickets(tickets.filter(ticket => ticket.id !== id));
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid">
      <div className="flex">
        <ul className="mt-2">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <li key={ticket.id} className="mb-2 p-2 border rounded bg-white shadow">
                <h3 className="font-bold">{ticket.headline}</h3>
                <p>Priority: {ticket.prioritylevel.prioritysymbol}</p>
                <p>Department: {ticket.department.department}</p>
                <p className="text-sm text-green-600 font-semibold">Status: {ticket.open ? "Open" : "Closed"}</p>
                <p className="text-xs text-gray-500">Created at: {new Date(ticket.createdAt).toLocaleString()}</p>
                <button
                  className="mt-2 text-red-500 hover:underline"
                  onClick={() => handleCloseTicket(ticket.id)}
                >
                  Close Ticket
                </button>
              </li>
            ))
          ) : (
            <p>No open tickets available.</p>
          )}
        </ul>
      </div>
      <div className="flex flex-col place-self-end rounded mt-10 mr-8 px-5 pt-5 pb-10 bg-blue-500">
        <label className="self-center text-xl mb-4">Navn</label>
        <label className="self-center text-xl">Afdeling</label>
      </div>
    </div>
  );
}
