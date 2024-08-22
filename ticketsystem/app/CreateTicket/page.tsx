"use client";

import React, { useState } from "react";

const CreateTicketPage: React.FC = () => {
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [department, setDepartment] = useState("IT");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ headline, description, priority, department });
  };

  return (
    <div>
      {/* Top Navigation Bar */}
      <nav>
        <ul>
          <li><a href="#open-tickets">Open Tickets</a></li>
          <li><a href="#closed-tickets">Closed Tickets</a></li>
          <li><a href="#your-tickets">Your Tickets</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#sla">SLA</a></li>
        </ul>
      </nav>

      {/* Create Ticket Form */}
      <div>
        <h1>Create a New Ticket</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="headline">Ticket Headline</label>
            <input
              type="text"
              id="headline"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="Enter your ticket headline"
            />
          </div>

          <div>
            <label htmlFor="department">Select the Department</label>
            <select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          <div>
            <label>Priority Level</label>
            <div>
              {["Low", "Medium", "High"].map((level) => (
                <label key={level}>
                  <input
                    type="radio"
                    name="priority"
                    value={level}
                    checked={priority === level}
                    onChange={(e) => setPriority(e.target.value)}
                  />
                  <span>{level}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              placeholder="Describe the issue or request in detail..."
            />
          </div>

          <div>
            <button type="button">Cancel</button>
            <button type="submit">Submit Ticket</button>
          </div>
        </form>
      </div>

      {/* Company Contact Info Section */}
      <footer>
        <h2>Contact Information</h2>
        <p>Company Name: Your Company Name</p>
        <p>CVR: 12345678</p>
        <p>Address: 1234 Business St., City, Country</p>
        <p>Email: info@yourcompany.com</p>
        <p>Phone: +1 234 567 8900</p>
      </footer>
    </div>
  );
};

export default CreateTicketPage;
