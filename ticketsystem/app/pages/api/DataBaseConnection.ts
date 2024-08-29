"use server";
import prisma from "../../lib/prisma"; // Adjust the import path based on your project structure

export interface Ticket {
  id: number;
  headline: string;
  description: string;
  priority: string;
  department: string;
  open: boolean;
  createdAt: Date;
}

export interface ErrorResponse {
  error: string;
}

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

export async function InsertTicket({ headline, description, priority, department }: Omit<Ticket, 'id' | 'open' | 'createdAt'>) {
  try {
    if (!headline || !department || !priority || !description) {
      return { error: "All fields need to be filled" };
    }

    const [depId, prioId] = await GetForeignKeys(department, priority);

    const newTicket = await prisma.ticket.create({
      data: {
        headline,
        description,
        departmentid: depId,
        prioritylevelid: prioId,
        open: true,
        createdAt: new Date(),
      },
    });

    return newTicket;
  } catch (error) {
    return { error: "Error creating ticket" };
  }
}

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
