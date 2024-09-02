"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { GetTickets, CloseTicket, OutputTicket } from "@/app/pages/api/DataBaseConnection";
import MenueBar from "../MenueBar";
import styles from './TicketDetails.module.css'; // Import your custom styles

export default function TicketDetails() {
  const [ticket, setTicket] = useState<OutputTicket | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const ticketId = searchParams.get("id");

    if (ticketId) {
      fetchTicketDetails(parseInt(ticketId, 10));
    } else {
      setError("No ticket ID provided");
    }
  }, [searchParams]);

  const fetchTicketDetails = async (id: number) => {
    const result = await GetTickets();
  
    if ("error" in result) {
      setError(result.error);
    } else {
      // Cast the result to unknown first, then to OutputTicket[]
      const tickets = result as unknown as OutputTicket[];
  
      // Now use the 'find' method on the array
      const ticket = tickets.find((ticket: OutputTicket) => ticket.id === id);
  
      if (ticket) {
        setTicket(ticket);
      } else {
        setError("Ticket not found");
      }
    }
  };

  const handleCloseTicket = async () => {
    if (ticket) {
      setLoading(true);
      const result = await CloseTicket(ticket.id);

      if ("error" in result) {
        setError(result.error);
      } else {
        setTicket({ ...ticket, open: false });
      }
      setLoading(false);
    }
  };

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <MenueBar />
      <div className="flex justify-center items-center flex-grow p-6">
        <div className="ticket-details-container bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
          <h1 className="text-4xl font-bold text-blue-800 mb-6">{ticket.headline}</h1>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-blue-600">Description</h2>
            <p className="text-lg text-gray-700">{ticket.description}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600">Created By</h3>
            <p className="text-lg text-gray-700">{ticket.author.acount_name}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600">Department</h3>
            <p className="text-lg text-gray-700">{ticket.department.department}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600">Priority</h3>
            <p className="text-lg text-gray-700">{ticket.prioritylevel.prioritysymbol}</p>
          </div>

          {/* Ticket Status and Close Box */}
          <div className={`mb-4 p-4 border-2 rounded ${ticket.open ? 'border-green-500 bg-green-100' : 'border-red-500 bg-red-100'}`}>
            <h3 className="text-xl font-semibold text-blue-600">Status</h3>
            <p className={`text-lg font-bold ${ticket.open ? 'text-green-600' : 'text-red-600'}`}>
              {ticket.open ? "Open" : "Closed"}
            </p>
            {ticket.open && (
              <button
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition"
                onClick={handleCloseTicket}
                disabled={loading}
              >
                {loading ? "Closing..." : "Close Ticket"}
              </button>
            )}
          </div>

          <div className="text-right">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
              onClick={() => router.push("/OpenTickets")}
            >
              Back to Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
