"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GetTickets, OutputTicket, CloseTicket } from "@/app/pages/api/DataBaseConnection";
import MenueBar from "../MenueBar";
import styles from './OpenTickets.module.css'; // Assuming you have custom styles

export default function OpenTickets() {
  const [tickets, setTickets] = useState<OutputTicket[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [accountName, setAccountName] = useState<string | null>(null);
  const [departmentName, setDepartmentName] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const acount_name = searchParams.get("acount_name");
    const department = searchParams.get("department");

    if (acount_name && department) {
      localStorage.setItem("acount_name", acount_name);
      localStorage.setItem("department", department);
      setAccountName(acount_name);
      setDepartmentName(department);
    } else {
      const storedName = localStorage.getItem("acount_name");
      const storedDepartment = localStorage.getItem("department");
      setAccountName(storedName);
      setDepartmentName(storedDepartment);
    }

    async function fetchTickets() {
      const result = await GetTickets();

      if ("error" in result) {
        setError(result.error);
      } else {
        const filteredTickets = departmentName
          ? result.filter(ticket => ticket.department.department === departmentName && ticket.open)
          : result.filter(ticket => ticket.open);

        // Sorting by priority and then by created date
        filteredTickets.sort((a, b) => {
          const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };
          const priorityComparison = priorityOrder[a.prioritylevel.prioritysymbol] - priorityOrder[b.prioritylevel.prioritysymbol];
          if (priorityComparison !== 0) return priorityComparison;
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });

        setTickets(filteredTickets);
      }
    }
    fetchTickets();
  }, [departmentName, searchParams]);

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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <MenueBar />
      <div className="flex flex-grow p-4 space-x-6">
        {/* Tickets Section */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-4 w-full">
            {tickets.length > 0 ? (
              tickets.map((ticket) => (
                <li
                  key={ticket.id}
                  className={`${styles.ticketItem} flex justify-between items-center p-6 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-200 w-full cursor-pointer`}
                  onClick={() => router.push(`/TicketDetails?id=${ticket.id}`)} // Navigate to the detailed view page
                >
                  <div>
                    <h3 className="text-3xl font-bold text-blue-800">{ticket.headline}</h3>
                    <p>Priority: {ticket.prioritylevel.prioritysymbol}</p>
                    <p>Department: {ticket.department.department}</p>
                    <p className="text-sm text-green-600 font-semibold">Status: {ticket.open ? "Open" : "Closed"}</p>
                    <p className="text-xs text-gray-500">Created at: {new Date(ticket.createdAt).toLocaleString()}</p>
                  </div>
                  <button
                    className="ml-4 text-red-500 hover:underline"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the navigation when closing a ticket
                      handleCloseTicket(ticket.id);
                    }}
                  >
                    Close Ticket
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No open tickets available.</p>
            )}
          </ul>
        </div>

        {/* Account Info Section */}
        <div className="flex-none w-72 bg-blue-800 text-white rounded-lg p-6 shadow-lg">
          <h1 className="text-2xl font-bold">{accountName}</h1>
          <p className="text-lg mt-2">Department: {departmentName}</p>
        </div>
      </div>
    </div>
  );
}