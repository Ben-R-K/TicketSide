"use client";
import MenueBar from "../MenueBar";
import React from "react";

const SLAForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Menu Bar */}
      <MenueBar />

      {/* SLA Content Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-12">Service Level Agreement (SLA)</h1>

        {/* Introduction */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Introduction</h2>
          <p className="text-gray-700">
            This Service Level Agreement (SLA) outlines the commitment between the company and the client to deliver a specified level of service. It ensures that the client receives the expected performance and quality of service, including clear guidelines on response times, service availability, and other critical metrics.
          </p>
        </div>

        {/* Response Time */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Response Time</h2>
          <p className="text-gray-700">
            Our company is dedicated to providing timely support to our clients. We guarantee a response to all support requests within 4 hours during standard business hours (Monday through Friday, 9 AM to 5 PM). We understand the importance of quick resolutions, and our team is committed to addressing issues as swiftly as possible.
          </p>
          <p className="text-gray-700">
            For critical issues that impact business operations, our support team will prioritize these requests and provide immediate assistance. Our goal is to minimize downtime and ensure that your business processes continue to run smoothly.
          </p>
        </div>

        {/* Uptime Guarantee */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Uptime Guarantee</h2>
          <p className="text-gray-700">
            We are committed to delivering a reliable service with a guaranteed uptime of 99.9% on a monthly basis. This uptime guarantee ensures that our services are available and functioning as expected for the vast majority of the time, reducing the risk of disruptions to your operations.
          </p>
          <p className="text-gray-700">
            Our infrastructure is designed with redundancy and high availability in mind, allowing us to maintain service continuity even in the event of hardware failures or other issues. In the rare case of downtime, we will provide timely updates and work diligently to restore full service as quickly as possible.
          </p>
        </div>

        {/* Service Quality */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Service Quality</h2>
          <p className="text-gray-700">
            We strive to maintain the highest standards of service quality. Our team undergoes regular training to stay up-to-date with the latest industry practices and technologies. This ensures that we can provide our clients with the most effective and efficient solutions.
          </p>
          <p className="text-gray-700">
            We also actively seek feedback from our clients to continually improve our services. Your satisfaction is our priority, and we are always looking for ways to enhance our offerings and better meet your needs.
          </p>
        </div>

        {/* Penalties and Compensation */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Penalties and Compensation</h2>
          <p className="text-gray-700">
            In the unlikely event that we fail to meet our uptime guarantee or any other agreed-upon service levels, we will offer service credits as compensation. These credits can be applied to future invoices, ensuring that you are fairly compensated for any inconvenience caused by service disruptions.
          </p>
          <p className="text-gray-700">
            We are committed to transparency and accountability. Our service level reports will be made available to you on a regular basis, allowing you to track our performance against the agreed SLA metrics.
          </p>
        </div>

        {/* Contact Us */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or need further information regarding this SLA, please do not hesitate to contact us. Our support team is available to assist you with any concerns or clarifications you may require.
          </p>
          <p className="text-gray-700">
            We value your business and are committed to providing the best possible service. Thank you for choosing our company as your trusted partner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SLAForm;
