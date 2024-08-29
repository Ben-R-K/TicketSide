"use server";
import fs from 'fs';
import path from 'path';

export interface Ticket {
  id: number;
  headline: string;
  departmentid: number;
  prioritylevelid: number;
  description: string;
  open: boolean;
  createdAt: Date;
  department: string;
  priority: string;
}

export interface CreateTicketInput {
  headline: string;
  description: string;
  priority: string;
  department: string;
}

export interface ErrorResponse {
  error: string;
}

// Define the path to the JSON file
const filePath = path.join(process.cwd(), 'tickets.json');

// Function to read tickets from the JSON file
function readTicketsFromFile(): Ticket[] {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return []; // Return an empty array if the file does not exist or cannot be read
  }
}

// Function to write tickets to the JSON file
function writeTicketsToFile(tickets: Ticket[]): void {
  fs.writeFileSync(filePath, JSON.stringify(tickets, null, 2));
}

// Function to insert a new ticket into the JSON file
export async function InsertTicket({ headline, description, priority, department }: CreateTicketInput): Promise<ErrorResponse | null> {
  try {
    // Basic validation
    if (!headline || !department || !priority || !description) {
      return { error: "All fields need to be filled" };
    }

    // Read existing tickets
    const tickets = readTicketsFromFile();

    // Create a new ticket object
    const newTicket: Ticket = {
      id: tickets.length + 1, // Simple way to generate a new ID
      headline,
      departmentid: 0, // Placeholder, since we're not using these fields now
      prioritylevelid: 0, // Placeholder, since we're not using these fields now
      description,
      open: true,
      createdAt: new Date(),
      department, // Just storing the department name directly
      priority, // Just storing the priority name directly
    };

    // Add the new ticket to the array
    tickets.push(newTicket);

    // Write the updated tickets array to the JSON file
    writeTicketsToFile(tickets);

    return null; // No error, return null
  } catch (error) {
    console.error('Error creating ticket:', error);
    return { error: 'Error creating ticket' };
  }
}

// Function to get all open tickets from the JSON file
export async function GetTickets(): Promise<Ticket[] | ErrorResponse> {
  try {
    const tickets = readTicketsFromFile();
    return tickets.filter(ticket => ticket.open);
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return { error: "Error fetching tickets" };
  }
}

// Function to close a ticket by updating its "open" status to false
export async function CloseTicket(id: number): Promise<ErrorResponse | null> {
  try {
    const tickets = readTicketsFromFile();
    const ticketIndex = tickets.findIndex(ticket => ticket.id === id);
    if (ticketIndex === -1) {
      return { error: "Ticket not found" };
    }

    tickets[ticketIndex].open = false; // Mark the ticket as closed
    writeTicketsToFile(tickets);
    return null; // Success
  } catch (error) {
    console.error('Error closing ticket:', error);
    return { error: 'Error closing ticket' };
  }
}
