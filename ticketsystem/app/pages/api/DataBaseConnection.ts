"use server";
import prisma from "../../lib/prisma"; // Adjust the import path based on your project structure


export async function GetAcounts() {

      const acounts = await prisma.acount.findMany({
        select: { id: true,
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

export async function InsertTicket({ headline, description, priority, department }: Ticket) {
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
