const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(cors()); 
app.use(express.json()); 

const filePath = path.join(__dirname, 'tickets.json');

// Load tickets from the JSON file
const loadTickets = () => {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } else {
    return [];
  }
};

// Save tickets to the JSON file
const saveTickets = (tickets) => {
  fs.writeFileSync(filePath, JSON.stringify(tickets, null, 2));
};

// API endpoint to get all tickets
app.get('/api/tickets', (req, res) => {
  const tickets = loadTickets();
  res.json(tickets);
});

// API endpoint to add a new ticket
app.post('/api/tickets', (req, res) => {
  const tickets = loadTickets();
  const newTicket = { ...req.body, id: Date.now().toString() }; // ID
  tickets.push(newTicket);
  saveTickets(tickets);
  res.status(201).json(newTicket);
});

// API endpoint to delete a ticket by ID
app.delete('/api/tickets/:id', (req, res) => {
  const tickets = loadTickets();         
  const filteredTickets = tickets.filter(ticket => ticket.id !== req.params.id);
  saveTickets(filteredTickets);
  res.status(204).end();
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
