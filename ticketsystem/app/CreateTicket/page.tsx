"use client";
import React, { useState } from "react";
import MenueBar from "../MenueBar";
import { InsertTicket } from "../pages/api/DataBaseConnection";
import { useRouter } from "next/navigation";
import styles from './CreateTicket.module.css'; // Import the CSS module

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
      setHeadline("");
      setDescription("");
      setPriority("Low");
      setDepartment("IT");
      router.push("/OpenTickets"); // Navigate to the Open Tickets page
    }
  };

  return (
    <div className={styles.pageContainer}>
      <MenueBar />
      <div className={styles.createTicketWrapper}>
        <div className={styles.createTicketHeader}>Create a New Ticket</div>
        <div className={styles.createTicketContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="headline"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="Enter your ticket headline"
                required
              />
              <label htmlFor="headline">Ticket Headline</label>
            </div>

            <div className={styles.inputGroup}>
              <select
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
              <label htmlFor="department">Select Department</label>
            </div>

            <div className={styles.prioritySlider}>
              {["Low", "Medium", "High"].map((level) => (
                <React.Fragment key={level}>
                  <input
                    type="radio"
                    id={level}
                    name="priority"
                    value={level}
                    checked={priority === level}
                    onChange={(e) => setPriority(e.target.value)}
                    required
                  />
                  <label htmlFor={level}>{level}</label>
                </React.Fragment>
              ))}
            </div>

            <div className={styles.inputGroup}>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                required
              />
              <label htmlFor="description">Description</label>
            </div>

            <div className={styles.submitCancelContainer}>
              <button className={styles.submitButton} type="submit">
                Submit
              </button>
              <button
                className={styles.cancelButton}
                type="button"
                onClick={() => router.push("/OpenTickets")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTicketPage;
