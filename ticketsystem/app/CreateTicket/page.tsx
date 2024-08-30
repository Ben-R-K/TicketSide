"use client";
import React, { useState } from "react";
import MenueBar from "../MenueBar";
import { InsertTicket } from "../pages/api/DataBaseConnection";
import { useRouter } from "next/navigation";
import './CreateTicketPage.css';

const CreateTicketPage: React.FC = () => {
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [prioritylevel, setPriority] = useState("Low");
  const [department, setDepartment] = useState("IT");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();
  const CreatorID = parseInt(localStorage.getItem("CreatorID") || "0", 10); // get CreatorID 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await InsertTicket({
      headline,
      description,
      prioritylevel,
      department,
      CreatorID, // Pass CreatorID from the application state or context
    });

    if (result && result.error) {
      alert(result.error);
    } else {
      setHeadline("");
      setDescription("");
      setPriority("Low");
      setDepartment("IT");
      router.push("/OpenTickets");
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <MenueBar /> {/* Menu bar at the top */}
      <div className="flex justify-center items-center flex-grow">
        <div className="create-ticket-container bg-white p-6 rounded-lg shadow-md">
          <h1 className="create-ticket-header text-2xl font-bold mb-6">Create a New Ticket</h1>
          <form className="create-ticket-form" onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <input
                type="text"
                id="headline"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder=" "
                required
                className="border border-gray-300 rounded p-2 w-full"
              />
              <label htmlFor="headline" className="text-sm text-gray-600">
                <span>Ticket Headline</span>
              </label>
            </div>

            <label className="dropdown-label text-sm text-gray-600" htmlFor="department-dropdown">Select Department:</label>
            <div className="priority-dropdown-container mb-4">
              <input
                className="dropdown"
                type="checkbox"
                id="department-dropdown"
                name="department-dropdown"
                checked={openDropdown === "department"}
                onChange={() => toggleDropdown("department")}
              />
              <label className="for-dropdown" htmlFor="department-dropdown">
                {department} <span className="icon">&#9662;</span>
              </label>
              <div className="section-dropdown">
                {["IT", "HR", "Finance", "Marketing"].map((dept) => (
                  <a
                    key={dept}
                    href="#"
                    onClick={() => {
                      setDepartment(dept);
                      setOpenDropdown(null);  
                    }}
                  >
                    {dept}
                  </a>
                ))}
              </div>
            </div>

            <label className="dropdown-label text-sm text-gray-600" htmlFor="priority-dropdown">Priority Level:</label>
            <div className="priority-dropdown-container mb-4">
              <input
                className="dropdown"
                type="checkbox"
                id="priority-dropdown"
                name="priority-dropdown"
                checked={openDropdown === "priority"}
                onChange={() => toggleDropdown("priority")}
              />
              <label className="for-dropdown" htmlFor="priority-dropdown">
                {prioritylevel} <span className="icon">&#9662;</span>
              </label>
              <div className="section-dropdown">
                {["Low", "Medium", "High"].map((level) => (
                  <a
                    key={level}
                    href="#"
                    onClick={() => {
                      setPriority(level);
                      setOpenDropdown(null);  
                    }}
                  >
                    {level}
                  </a>
                ))}
              </div>
            </div>

            <div className="coolinput mb-6">
              <textarea
                id="description"
                className="input border border-gray-300 rounded p-2 w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder=" "
                required
              />
              <label htmlFor="description" className="text-sm text-gray-600">Description</label>
            </div>

            <div className="submit-cancel-container flex justify-end space-x-4">
              <button
                className="cancel-button bg-gray-200 text-gray-700 px-4 py-2 rounded"
                type="button"
                onClick={() => router.push("/OpenTickets")}
              >
                Cancel
              </button>
              <button className="submit-button bg-blue-600 text-white px-4 py-2 rounded" type="submit">
                Submit Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTicketPage;
