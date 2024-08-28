"use server"
import prisma from '../../lib/prisma';

export async function GetTickets(req, res) {
  if (req.method === 'GET') {
    try {
      const tickets = await prisma.ticket.findMany();
      res.status(200).json(tickets);
    } catch (error) {
      res.status(500).json({ error: "Error fetching tickets" });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
interface ticket{
  headline: string
  description: string
  priority: string
  department: string
}
interface forigendata{
  departmentId: number
  prioritylevelId: number
}

export async function InsertTicket({headline, description, priority, department}: ticket) {
    try {
      
      // Basic validation
      if (!headline || !department || !priority || !description) {
        return {error: "All filds need to be filde"}
      }
      
      const data: forigendata = GetForiegnData(department, priority)
      console.log(data);
      const open = true;
      // Create a new ticket in the database
      await prisma.ticket.create({
        data: {
          headline: headline,
          departmentid: data[0],
          prioritylevelid: data[1],
          description: description,
          open: open
        },
      });   
    } catch (error) {
      return {error: 'Error creating user'}
    }
  }

async function GetForiegnData(department: string, prio: string){
  var departmentres;
  var priores;  
  try{
      departmentres = await prisma.department.findFirst({
        where:{ deparment: department}
      });
    } catch (error) {
      return "Error fetching from department"
    }
    try{
        priores = await prisma.prioritylevel.findFirst({
        where:{ prioritysymbol: prio}
      });
    } catch (error) {
      return "Error fetching from prioritylevel"
    }

    return {departmentres, priores}
  }