"use server";
import prisma from "../../lib/prisma"; // Adjust the import path based on your project structure

export interface Department {
  departmentId: number;
  department: string;
}

export interface Priority{
  priorityid: number
  prioritysymbol: string
}

export interface Ticket {
  id: number;
  headline: string;
  description: string;
  prioritylevel: Priority;
  department: Department;
  open: boolean;
  createdAt: Date;
}

export interface ErrorResponse {
  error: string;
}


export async function GetAcounts() {

      const acounts = await prisma.acount.findMany({
        select: { acountid: true,
                acount_name: true,
                department: true}
      });
      return acounts;

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

    // Access the specific properties from the objects returned by Prisma
    const depId = departmentRecord.departmentid;
    const prioId = priorityRecord.priorityid;

    return [depId, prioId];
  } catch (error) {
    throw new Error("Error fetching department or priority");
  }
}

export async function GetTicketInfo(id: number): Promise<OutputTicket | { error: string }> {
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id },
      include: {
        department: true,
        prioritylevel: true,
      },
    });

    if (!ticket) {
      return { error: "Ticket not found" };
    }

    return ticket;
  } catch (error) {
    console.error("Error fetching ticket:", error);
    return { error: "Error fetching ticket" };
  }
}

