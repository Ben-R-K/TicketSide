"use client";
import React, { useState } from "react";
import MenueBar from "../MenueBar";
import { InsertTicket } from "../pages/api/DataBaseConnection";
import { useRouter } from "next/navigation";
import './CreateTicketPage.css';  // Import the CSS file

const CreateTicketPage: React.FC = () => {
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [department, setDepartment] = useState("IT");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);  // State to track which dropdown is open
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
      setHeadline("");
      setDescription("");
      setPriority("Low");
      setDepartment("IT");
      router.push("/OpenTickets"); // Navigate to the Open Tickets page
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="page-background">
      <MenueBar />  {/* Menu bar at the top */}
      <div className="create-ticket-container">
        <h1 className="create-ticket-header">Create a New Ticket</h1>
        <form className="create-ticket-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              id="headline"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="headline">
              <span>Ticket Headline</span>
            </label>
          </div>

          {/* Label for Department Dropdown */}
          <label className="dropdown-label" htmlFor="department-dropdown">Select Department:</label>
          <div className="priority-dropdown-container">
            <input
              className="dropdown"
              type="checkbox"
              id="department-dropdown"
              name="department-dropdown"
              checked={openDropdown === "department"}
              onChange={() => toggleDropdown("department")}
            />
            <label className="for-dropdown" htmlFor="department-dropdown">
              {department} <span className="icon">&#9662;</span> {/* Dropdown icon */}
            </label>
            <div className="section-dropdown">
              {["IT", "HR", "Finance", "Marketing"].map((dept) => (
                <a
                  key={dept}
                  href="#"
                  onClick={() => {
                    setDepartment(dept);
                    setOpenDropdown(null);  // Close the dropdown after selection
                  }}
                >
                  {dept}
                </a>
              ))}
            </div>
          </div>

          {/* Label for Priority Dropdown */}
          <label className="dropdown-label" htmlFor="priority-dropdown">Priority Level:</label>
          <div className="priority-dropdown-container">
            <input
              className="dropdown"
              type="checkbox"
              id="priority-dropdown"
              name="priority-dropdown"
              checked={openDropdown === "priority"}
              onChange={() => toggleDropdown("priority")}
            />
            <label className="for-dropdown" htmlFor="priority-dropdown">
              {priority} <span className="icon">&#9662;</span> {/* Dropdown icon */}
            </label>
            <div className="section-dropdown">
              {["Low", "Medium", "High"].map((level) => (
                <a
                  key={level}
                  href="#"
                  onClick={() => {
                    setPriority(level);
                    setOpenDropdown(null);  // Close the dropdown after selection
                  }}
                >
                  {level}
                </a>
              ))}
            </div>
          </div>

          <div className="coolinput">
            <textarea
              id="description"
              className="input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="description" className="text">Description</label>
          </div>

          <div className="submit-cancel-container">
            <button
              className="cancel-button"
              type="button"
              onClick={() => router.push("/OpenTickets")}
            >
              Cancel
            </button>
            <button className="submit-button" type="submit">
              Submit Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTicketPage;
