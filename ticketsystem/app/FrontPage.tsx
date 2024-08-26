"use client";
import React from "react";
import MenueBar from "./MenueBar";
import { useTickets } from "./TicketContext";
export default function FrontPage() {
  const { tickets, removeTicket } = useTickets();

  const sortedTickets = tickets.sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return b.createdAt.getTime() - a.createdAt.getTime();
  });

  return (
    <div className="grid">
      <MenueBar />
      <div className="flex">
        <ul className="mt-2">
          {sortedTickets.length > 0 ? (
            sortedTickets.map((ticket) => (
              <li key={ticket.id} className="mb-2 p-2 border rounded bg-white shadow">
                <h3 className="font-bold">{ticket.headline}</h3>
                <p>Priority: {ticket.priority}</p>
                <p>Department: {ticket.department}</p>
                <p className="text-sm text-green-600 font-semibold">Status: {ticket.status}</p>
                <p className="text-xs text-gray-500">Created at: {ticket.createdAt.toLocaleString()}</p>
                <button 
                  className="mt-2 text-red-500 hover:underline"
                  onClick={() => removeTicket(ticket.id)} // Use the id to remove the ticket
                >
                  Close Ticket
                </button>
              </li>
            ))
          ) : (
            <p>No tickets available.</p>
          )}
        </ul>
      </div>
            <div className="flex flex-col place-self-end rounded mt-10 mr-8 pr-5 pl-5 pt-5 pb-10 bg-blue-500">
                <label className="self-center text-xl mb-4">Navn</label>
                <label className="self-center text-xl">Afdeling</label>
            </div>
        </div>
    );
}
