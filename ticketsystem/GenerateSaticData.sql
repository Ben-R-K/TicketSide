USE ticketbase;

INSERT INTO department(department)
VALUES ("IT"), ("HR"), ("Finance"), ("Marketing");

INSERT INTO acount(acount_name, departmentid)
VALUES ("Peter", 1), ("Lucas", 2), ("Anna", 3), ("Marcus", 4);

INSERT INTO prioritylevel(prioritysymbol)
VALUES ("Low"), ("Medium"), ("High");

INSERT INTO sla(headline, companysignature, partnersignature, ScopeofServices, ServiceLevelObjectives, Responsibilities,PerformanceEscalationPenalties, ConfidentialityTerminationLaw, EffectiveDate, ExpirationDate)
VALUES("Service Level Agreement between The Company and the US army", "TheCompany.Inc", "United States Army",
"The Company agrees to provide the following IT services to the US army:

    Network Management and Security: Monitoring, managing, and securing the Military Organization's network infrastructure, including firewalls, routers, switches, and other network devices.

    Server Management: Maintenance, monitoring, and support for all servers, including updates, patches, and backups.

    Help Desk Support: 24/7 help desk support for end-users, including troubleshooting, issue resolution, and technical assistance.

    Software and Hardware Support: Installation, configuration, and maintenance of approved software and hardware.

    Data Backup and Recovery: Regular data backup and recovery services to ensure data integrity and availability.

    Incident Management: Prompt response to and resolution of IT incidents and issues.

    Cybersecurity: Implementation and management of cybersecurity measures, including threat detection, antivirus, and malware protection.",
    "The following service level objectives define the expected performance standards:

    Uptime: The IT infrastructure must maintain an uptime of 99.9% per calendar month, excluding scheduled maintenance.

    Response Time: Initial response to incidents and service requests within:
        Critical Issues (P1): 15 minutes.
        High Priority Issues (P2): 30 minutes.
        Medium Priority Issues (P3): 1 hour.
        Low Priority Issues (P4): 4 hours.

    Resolution Time: Issues should be resolved within the following timeframes, unless otherwise agreed upon:
        Critical Issues (P1): 4 hours.
        High Priority Issues (P2): 8 hours.
        Medium Priority Issues (P3): 24 hours.
        Low Priority Issues (P4): 72 hours.

    Scheduled Maintenance: Scheduled maintenance will be performed during off-peak hours.
    The Military Organization will be notified at least 48 hours in advance of any planned maintenance activities.",
    "The Compay agrees to:

    Provide the services listed in Section 3 in accordance with the service level objectives outlined in Section 4.

    Maintain qualified personnel to perform the services.

    Provide regular status updates and reports on service performance.

    Implement best practices for cybersecurity and data protection.

    Maintain confidentiality and security of all Military Organization data and information.

    Conduct regular performance reviews to ensure compliance with the SLA.
    
    The US army agrees to:

    Provide The Company with necessary access to systems, networks, and facilities required to perform services.

    Notify The Company of any changes in the IT environment that may affect service delivery.

    Provide timely responses to requests for information or actions required to resolve issues.

    Designate points of contact for service coordination and communication.

    Ensure that all end-users comply with security policies and procedures.",
    "The Company will monitor service performance on a continuous basis and provide monthly performance reports to US Army.
	Reports will include details on uptime, incident response times, resolution times, and any deviations from the agreed service levels.
	Regular meetings (e.g., monthly, quarterly) will be scheduled to review performance, discuss issues, and plan improvements.
    In the event that a service issue cannot be resolved within the specified resolution time, the following escalation procedure will be followed:
	1. Level 1: Escalate to the assigned IT support manager.
	2. Level 2: Escalate to the IT Company’s senior management.
	3. Level 3: Escalate to the Military Organization’s designated contact.
	4. Level 4: Escalate to the Military Organization’s senior management.
    
    If The Company fails to meet the service level objectives defined in this SLA, the following penalties will apply:
	For every 1% below the 99.9% uptime target, The Company will provide a 2% credit on the monthly service fee.
	For each missed response or resolution time, The Company will provide a 10.000 dollars compensation on the monthly service fee.",
    "The Company agrees to maintain the confidentiality of all information related to US Army and its operations.
	This includes, but is not limited to, data, communication, and any other proprietary information.
    
	This SLA is effective from the date of signing and will remain in effect until 01/09 2028 unless terminated earlier by either party.
	ither party may terminate this SLA by providing 30 days' written notice to the other party.
	In the event of termination, The Company will assist US Army in transitioning services to a new provider to ensure continuity of operations.

	Any amendments to this SLA must be agreed upon in writing by both parties and will take effect only upon mutual consent.
    
    This SLA will be governed by and construed in accordance with the laws of  The United States of America.",
    "2024-08-28", "2028-09-01");