"use client";

import { InsertTicket } from "../pages/api/DataBaseConnection";
import MenueBar from "../MenueBar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateTicketPage: React.FC = () => {
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [department, setDepartment] = useState("IT");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await InsertTicket({
      headline,
      description,
      priority,
      department,
    });

    if (result && result.error) {
      alert(result.error);
    } else {
      // Optionally clear the form or navigate to another page
      setHeadline("");
      setDescription("");
      setPriority("Low");
      setDepartment("IT");
      router.push("/OpenTickets"); // Navigate to the Open Tickets page
    }
  };

  return (
    <div>
      <MenueBar />
      <div className="grid">
        <h1 className="flex justify-center text-xl font-bold mt-5">
          Create a New Ticket
        </h1>
        <form
          className="bg-cyan-400 grid justify-items-center justify-self-center py-2 px-12 rounded-md"
          onSubmit={handleSubmit}
        >
          <label htmlFor="headline">Ticket Headline:</label>
          <div>
            <input
              className="bg-cyan-300 rounded"
              type="text"
              id="headline"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="Enter your ticket headline"
              required
            />
          </div>

          <label htmlFor="department">Select the Department:</label>
          <div>
            <select
              className="bg-cyan-300 rounded"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            >
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          <div className="grid">
            <label className="justify-self-center">Priority Level:</label>
            <div>
              {["Low", "Medium", "High"].map((level) => (
                <label key={level}>
                  <input
                    type="radio"
                    name="priority"
                    value={level}
                    checked={priority === level}
                    onChange={(e) => setPriority(e.target.value)}
                    required
                  />
                  <span>{level}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <textarea
              className="bg-cyan-300 rounded-md"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              placeholder="Describe the issue or request in detail..."
              required
            />
          </div>

          <div>
            <button className="m-3 hover:bg-cyan-500 rounded" type="button">
              Cancel
            </button>
            <button className="m-3 hover:bg-cyan-500 rounded" type="submit">
              Submit Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTicketPage;
