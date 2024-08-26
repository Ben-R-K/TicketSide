"use client";
import React, { useState } from "react";
import MenueBar from "../MenueBar";
import { useTickets } from "../TicketContext";
import { useRouter } from "next/navigation";

const CreateTicketPage: React.FC = () => {
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low");
  const [department, setDepartment] = useState("IT");
  const { addTicket } = useTickets();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTicket = {
      headline,
      description,
      priority,
      department,
      createdAt: new Date(),
      status: "Open",
    };

    await addTicket(newTicket);
    router.push("/"); // Navigate back to the FrontPage
  };

  return (
    <div>
      {/* Top Navigation Bar */}

      {/* Create Ticket Form */}
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
            />
          </div>

          <label htmlFor="department">Select the Department:</label>
          <div>
            <select
              className="bg-cyan-300 rounded"
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
                    onChange={(e) => setPriority(e.target.value as "Low" | "Medium" | "High")}
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
