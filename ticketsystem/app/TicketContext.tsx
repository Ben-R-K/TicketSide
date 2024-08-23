"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Ticket {
  headline: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  department: string;
  createdAt: Date;
}

interface TicketContextType {
  tickets: Ticket[];
  addTicket: (ticket: Ticket) => void;
  removeTicket: (index: number) => void; 
}

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export const TicketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const addTicket = (ticket: Ticket) => {
    setTickets((prevTickets) => [...prevTickets, ticket]);
  };

  const removeTicket = (index: number) => {
    setTickets((prevTickets) => prevTickets.filter((_, i) => i !== index));
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket, removeTicket }}>
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
