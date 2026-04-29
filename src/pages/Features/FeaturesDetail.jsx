import React from "react";
import "./FeaturesDetail.css";

import phone1 from "../../assets/broadcast.png";
import phone2 from "../../assets/User-Management.png";
import phone3 from "../../assets/Maintenance-Billing.png";
import phone4 from "../../assets/directory.png";
import phone5 from "../../assets/Reports.png";
import phone6 from "../../assets/helpdesk.png";
import phone7 from "../../assets/Visitor-Management.png";
import phone8 from "../../assets/Receipt-Automation.png";
import phone9 from "../../assets/Expense-Management.png";
import phone10 from "../../assets/Delivery-Courier-Management.png";
import phone11 from "../../assets/Staff-Helper-Management.png";
import phone12 from "../../assets/community.png";
import bg from "../../assets/main.png";

const FeatureBlock = ({ title, desc, points, phone, reverse }) => {

  return (
    <section className={`feature-section ${reverse ? "reverse" : ""}`}>

      {/* IMAGE */}
      <div className="image-area">
        <img src={bg} className="bg-shape" alt="" />
        <img src={phone} className="phone" alt="" />
      </div>

      {/* CONTENT */}
      <div className="content-area">

        {/* 🔥 ICON */}
        <div className="heading-row">

  <h2>{title}</h2>
</div>

        <p>{desc}</p>

        <ul>
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

    </section>
  );
};

const FeaturesDetailed = () => {
  return (
    <div className="features-wrapper">

      {/* HEADER */}
      <div className="header">
        <h1>Explore All Features</h1>
        <p>
          Our Society Management System simplifies operations, enhances communication,
          and improves overall living experience.
        </p>
      </div>
      <FeatureBlock
        title="Resident Management"
        phone={phone2}
        desc="Committee members can manage all user's basic information, access level, 
        entry/exit of members as well as unit details. In a single window, members can view all 
        user's information like who downloaded app, number of users yet to subscribe, 
        maid/cook/driver/helper data and much more."
        points={[" Move In/Out", "My Family", "Helper Management"]}
      />

      <FeatureBlock
        title="Notices & Alerts"
        phone={phone1}
        reverse
        desc="Whether it is a community meeting or some social events, or even an emergency drill, 
        SocietyRun provides one click alert option to Society Members as well as Tenants to get 
        information, connect and participate."
        points={["Email Alert", "SMS Alert", "Mobile Alert"]}
      />

      <FeatureBlock
  title="Maintenance & Billing"
  phone={phone3}
  desc="Simplify society financial management with automated maintenance billing and seamless 
  payment tracking. Generate invoices, collect payments online, and maintain complete financial 
  transparency for all residents."
  points={[
    "Auto-generated maintenance bills",
    "Online payment integration (UPI, Cards)",
    "Due reminders & penalty tracking",
    "Download invoices & receipts",
    "Complete financial reports"
  ]}
/>

<FeatureBlock
  title="Complaint Management"
  phone={phone6}
  reverse
  desc="In case of a complaint, society members can easily raise the issue through mobile app. 
  Committee member will get instant notification and can easily assign complaints to facility 
  manager or vendor. This process helps in speedy resolution of Issues."
  points={[
    "Raise Complaint",
    "Get Instant Reply from Authorities",
    "Assign Complaint to Society Staff",
    "Track Complaint History"
  ]}
/>

<FeatureBlock
  title="Community Engagement"
  phone={phone12}
  desc="Enhance community participation and engagement by enabling residents to actively 
  take part in decision-making processes. Members can vote in polls, stay updated with important 
  announcements, and receive timely reminders for meetings and events."
  points={[
    "Create and participate in polls for decision making",
    "Stay updated with society announcements",
    "Get reminders for meetings and events",
    "Engage with community discussions",
    "Build a connected and interactive society"
  ]}
/>

<FeatureBlock
  title="Visitor Management"
  phone={phone7}
  reverse
  desc="Enhance the security and efficiency of your society with a smart visitor management system. 
  Residents can pre-approve guests and deliveries, while security personnel can manage entries 
  digitally at the gate. Real-time notifications and digital logs ensure complete transparency and 
  improved safety for all residents."
points={[
  "Pre-approve visitors and deliveries in advance",
  "Real-time entry notifications for residents",
  "Digital visitor logs for tracking and security",
  "Quick gate approvals for seamless entry experience"
  ]}
/>

<FeatureBlock
  title="Delivery & Courier Management"
  phone={phone10} 
  desc="Manage all incoming deliveries and couriers efficiently with a digital tracking system. 
  Security personnel can log each parcel at the gate, capture delivery details, and notify residents 
  instantly.The system also maintains a complete history of all deliveries for transparency and tracking."
  points={[
    "Log courier entries at gate with details",
    "Instant notification to residents",
    "OTP-based secure delivery handover",
    "Digital logs of all couriers",
    "Track missed or pending deliveries"
  ]}
/>

<FeatureBlock
  title="Staff & Helper Management"
  phone={phone11}
  reverse
  desc="Manage all society staff and household helpers such as maids, drivers, cooks, and security 
  personnel in a centralized system. Residents can add their helpers, define working hours, and track 
  their daily entry and exit."
  points={[
    "Add and manage maids, drivers, cooks, and helpers",
    "Track daily entry and exit of helpers",
    "Assign helpers to specific flats",
    "Store ID proof and contact details",
    "Instant alerts on helper arrival",
    "Maintain complete helper history"
  ]}
/>

<FeatureBlock
  title="Receipt Automation"
  phone={phone8}
  desc="Automate the generation and delivery of payment receipts for all transactions within
   the society. Whenever a resident makes a payment such as maintenance, booking fees, or any
    other charges, the system instantly generates a professional digital receipt and shares it
     via email or app notification. This eliminates manual work, ensures accuracy, and maintains 
     proper financial records."
  points={[
    "Instant receipt generation after successful payment",
    "Downloadable PDF receipts anytime",
    "Automatic email & app notifications",
    "Unique receipt ID for each transaction",
    "Complete receipt history for users",
    "Secure storage for future access"
  ]}
/>

<FeatureBlock
  title="Expense Management"
  phone={phone9} 
  reverse
  desc="Easily track and manage all society expenses in one place. 
  From utility bills and staff salaries to repair and maintenance costs, the system 
  records every expense with proper categorization. It ensures financial transparency, 
  helps in budget planning, and provides a clear overview of where the society's funds are 
  being utilized."
  points={[
    "Track all expenses (electricity, water, security, repairs)",
    "Categorize expenses for better organization",
    "Upload bills & invoices for records",
    "Monthly and yearly expense reports",
    "Budget planning and expense analysis",
    "Complete transparency for residents"
  ]}
/>

      <FeatureBlock
  title="Directory"
  phone={phone4}
  desc="Access a complete and well-organized digital directory of all society members, residents, and
   committee representatives in one place. The system also helps in quickly identifying vehicle owners,
    managing committee roles, and accessing emergency contacts when needed."
  points={[
    "Member Directory with complete profiles",
    "Committee Directory with roles & responsibilities",
    "Vehicle Directory for quick identification",
    "Emergency Contact access (police, hospital, fire)"
  ]}
/>

        <FeatureBlock
  title="Reports"
  phone={phone5}
  reverse
  desc="Gain powerful insights into your society operations with detailed and real-time reports. 
  Monitor financial transactions, track maintenance collections, analyze member activities, 
  and evaluate overall performance."
  points={[
    "Financial reports with income & expense tracking",
    "Member activity & participation reports",
    "Event and engagement analytics",
    "Maintenance and payment status reports"
  ]}
/>
    </div>
  );
};

export default FeaturesDetailed;