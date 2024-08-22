"use client";
 import MenueBar from "../MenueBar";
import React from "react";

const SLAForm: React.FC = () => {
  return (
    <div>
      {/* Top Navigation Bar */}
      <MenueBar/>

      {/* Top Section with Full-Width Image and Company Info */}
      <header>
        <img src="https://via.placeholder.com/1920x400" alt="Company Banner" id="banner-image" />
        <div id="banner-text">
          <h1>Your Company Name</h1>
          <p>MORE THAN 25 YEARS OF EXPERIENCE IN CONTRACT MANAGEMENT IN ONE SYSTEM</p>
          <p>Solusi ELO CLM helps ensure effective contract management for our customers.</p>
          <button>Contact Us</button>
        </div>
      </header>

      {/* SLA Content Section */}
      <section id="sla">
        <h2>Service Level Agreement (SLA)</h2>
        <p>
          This Service Level Agreement (SLA) is a commitment between the company
          and the client to provide a specified level of service. The SLA outlines
          the expected performance and quality of service, including response
          times, service availability, and other key metrics.
        </p>
        <p>
          <strong>Response Time:</strong> The company commits to responding to
          all support requests within 4 hours during business hours.
        </p>
        <p>
          <strong>Uptime Guarantee:</strong> The service will be available 99.9%
          of the time, measured on a monthly basis.
        </p>
        <p>
          <strong>Penalties:</strong> If the service fails to meet the agreed
          uptime, the company will provide service credits as compensation.
        </p>
      </section>
    </div>
  );
};

export default SLAForm;