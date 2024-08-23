"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique IDs

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
    const storedTickets = localStorage.getItem("tickets");
    if (storedTickets) {
      setTickets(JSON.parse(storedTickets).map((ticket: Ticket) => ({
        ...ticket,
        createdAt: new Date(ticket.createdAt),
      })));
    }
  };

  const addTicket = async (ticket: Ticket) => {
    const newTicket = { ...ticket, id: uuidv4() }; // Assign a unique ID to each ticket
    const newTickets = [...tickets, newTicket];
    setTickets(newTickets);
    localStorage.setItem("tickets", JSON.stringify(newTickets));
  };

  const removeTicket = async (id: string) => {
    const newTickets = tickets.filter(ticket => ticket.id !== id);
    setTickets(newTickets);
    localStorage.setItem("tickets", JSON.stringify(newTickets));
  };

  useEffect(() => {
    loadTickets(); // Load tickets when the context provider mounts
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
