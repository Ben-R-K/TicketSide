"use server";
import prisma from '../../lib/prisma';

export interface Ticket {
  id: number;
  headline: string;
  departmentid: number;
  prioritylevelid: number;
  description: string;
  open: boolean;
  createdAt: Date; 
  department: {
    departmentid: number;
    department: string;
  };
  prioritylevel: {
    priorityid: number;
    prioritysymbol: string;
  };
}

export interface ErrorResponse {
  error: string;
}

export interface CreateTicketInput {
  headline: string;
  description: string;
  priority: string;
  department: string;
}

// Function to get all open tickets
export async function GetTickets(): Promise<Ticket[] | ErrorResponse> {
  try {
    const tickets = await prisma.ticket.findMany({
      where: { open: true }, // Fetch only open tickets
      include: {
        department: true,
        prioritylevel: true,
      },
    });
    return tickets;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return { error: "Error fetching tickets" };
  }
}

// Function to insert a new ticket into the database
export async function InsertTicket({ headline, description, priority, department }: CreateTicketInput): Promise<ErrorResponse | null> {
  try {
    // Basic validation
    if (!headline || !department || !priority || !description) {
      return { error: "All fields need to be filled" };
    }

    // Get foreign keys for department and priority level
    const [depId, PrioID] = await GetForeignData(department, priority);
    const open = true;

    // Create a new ticket in the database
    await prisma.ticket.create({
      data: {
        headline: headline,
        departmentid: depId,
        prioritylevelid: PrioID,
        description: description,
        open: open,
      },
    });

    return null; // No error, return null
  } catch (error) {
    console.error('Error creating ticket:', error);
    return { error: 'Error creating ticket' };
  }
}

// Helper function to get foreign keys for department and priority level
async function GetForeignData(department: string, prio: string): Promise<[number, number]> {
  try {
    const departmentRes = await prisma.department.findFirst({
      where: { department },
      select: { departmentid: true },
    });

    const prioRes = await prisma.prioritylevel.findFirst({
      where: { prioritysymbol: prio },
      select: { priorityid: true },
    });

    if (!departmentRes || !prioRes) {
      throw new Error('Invalid department or priority');
    }

    return [departmentRes.departmentid, prioRes.priorityid];
  } catch (error) {
    console.error("Error fetching foreign keys:", error);
    throw new Error("Error fetching foreign keys: " + error.message);
  }
}
