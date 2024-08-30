"use server";
import prisma from "../../lib/prisma";

export interface Department {
  departmentId: number;
  department: string;
}

export interface Priority {
  priorityid: number;
  prioritysymbol: string;
}

export interface OutputTicket {
  id: number;
  headline: string;
  description: string;
  prioritylevel: Priority;
  department: Department;
  open: boolean;
  createdAt: Date;
  createdBy: string; // Ensure this is included
}

export interface InputTicket {
  id: number;
  headline: string;
  description: string;
  prioritylevel: string;
  department: string;
  open: boolean;
  createdAt: Date;
  createdBy: string; // Ensure this is included
}

export interface ErrorResponse {
  error: string;
}

// Fetch accounts
export async function GetAccounts() {
  
  try {
    const acounts = await prisma.acount.findMany({
      select: {
        acountid: true,
        acount_name: true,
        department: true,
      },
    });
    return acounts;
  } catch (error) {
    return { error: "Error fetching accounts" };
  }
}

// Fetch tickets
export async function GetTickets() {
  try {
    const tickets = await prisma.ticket.findMany({
      include: {
        department: true,
        prioritylevel: true,
      },
    });
    return tickets;
  } catch (error) {
    return { error: "Error fetching tickets" };
  }
}

// Insert a new ticket
export async function InsertTicket({ headline, description, prioritylevel, department, createdBy }: Omit<InputTicket, 'id' | 'open' | 'createdAt'>) {
  try {
    console.log("Inserting ticket with values:", { headline, description, prioritylevel, department, createdBy });

    if (!headline || !description || !prioritylevel || !department || !createdBy) {
      return { error: "All fields need to be filled" };
    }

    const [depId, prioId] = await GetForeignKeys(department, prioritylevel);

    const newTicket = await prisma.ticket.create({
      data: {
        headline,
        description,
        departmentid: depId,
        prioritylevelid: prioId,
        open: true,
        createdBy
      },
    });

    return newTicket;
  } catch (error) {
    console.error("Error creating ticket:", error);
    return { error: "Error creating ticket" };
  }
}

// Close a ticket
export async function CloseTicket(ticketId: number) {
  try {
    const closedTicket = await prisma.ticket.update({
      where: { id: ticketId },
      data: { open: false },
    });

    return closedTicket;
  } catch (error) {
    return { error: "Error closing ticket" };
  }
}

async function GetForeignKeys(department: string, priority: string) {
  try {
    const departmentRecord = await prisma.department.findFirst({
      where: { department },
      select: { departmentid: true },
    });

    const priorityRecord = await prisma.prioritylevel.findFirst({
      where: { prioritysymbol: priority },
      select: { priorityid: true },
    });

    if (!departmentRecord || !priorityRecord) {
      throw new Error("Invalid department or priority");
    }

    return [departmentRecord.departmentid, priorityRecord.priorityid];
  } catch (error) {
    throw new Error("Error fetching department or priority");
  }
}
