"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Ticket {
  id: string;
  headline: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  department: string;
  createdAt: Date;
  status: "Open" | "Closed";
}

interface TicketContextType {
  tickets: Ticket[];
  addTicket: (ticket: Ticket) => Promise<void>;
  removeTicket: (id: string) => Promise<void>;
  loadTickets: () => Promise<void>;
}

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export const TicketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const loadTickets = async () => {
    const response = await fetch('http://localhost:3001/api/tickets');
    const data: Ticket[] = await response.json();
    setTickets(
      data.map((ticket: Ticket) => ({
        ...ticket,
        createdAt: new Date(ticket.createdAt), // Convert createdAt to Date object
      }))
    );
  };

  const addTicket = async (ticket: Ticket) => {
    const response = await fetch('http://localhost:3001/api/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticket),
    });
    if (response.ok) {
      const newTicket = await response.json();
      setTickets((prevTickets) => [
        ...prevTickets,
        { ...newTicket, createdAt: new Date(newTicket.createdAt) }, // Ensure createdAt is a Date object
      ]);
    }
  };

  const removeTicket = async (id: string) => {
    const response = await fetch(`http://localhost:3001/api/tickets/${id}`, { method: 'DELETE' });
    if (response.ok) {
      setTickets((prevTickets) => prevTickets.filter(ticket => ticket.id !== id));
    }
  };

  useEffect(() => {
    loadTickets();
  }, []);

  return (
    <TicketContext.Provider value={{ tickets, addTicket, removeTicket, loadTickets }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error("useTickets must be used within a TicketProvider");
  }
  return context;
};
