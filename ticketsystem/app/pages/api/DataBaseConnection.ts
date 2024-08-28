"use server"
import prisma from '../../lib/prisma';

export async function GetTickets() {
    try {
      const tickets = await prisma.ticket.findMany();
      console.log(tickets);
    } catch (error) {
      return {error: "Error fetching tickets"}
    }
  }
interface ticket{
  headline: string
  description: string
  priority: string
  department: string
}

export async function InsertTicket({headline, description, priority, department}: ticket) {
  try {
    
      // Basic validation
      if (!headline || !department || !priority || !description) {
        return {error: "All filds need to be filde"}
      }
      const [depId, PrioID] = await GetForiegnData(department, priority)
      const open = true;
      // Create a new ticket in the database
      await prisma.ticket.create({
        data: {
          headline: headline,
          departmentid: depId,
          prioritylevelid: PrioID,
          description: description,
          open: open
        }
      });   
    } catch (error) {
      return {error: 'Error creating ticket'}
    }
  }
  async function GetForiegnData(department: string, prio: string){
    var departmentres, priores;  
  try{
      departmentres = await prisma.department.findFirst({
        where:{ department: department},
        select:{departmentid: true},
      });
    } catch (error) {
      return "Error fetching from department"
    }
    try{
        priores = await prisma.prioritylevel.findFirst({
        where:{ prioritysymbol: prio},
        select:{priorityid: true},
      });
    } catch (error) {
      return "Error fetching from prioritylevel"
    }
    return [departmentres.departmentid, priores.priorityid];
  }