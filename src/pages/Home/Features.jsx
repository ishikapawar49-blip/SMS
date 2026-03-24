import React from "react";
import "./Features.css";
import {
  HiUsers,
  HiCurrencyDollar,
  HiChatBubbleLeftRight,
  HiBell,
  HiShieldCheck,
  HiChartBar,
  HiCalendarDays,
  HiLockClosed,
} from "react-icons/hi2";

const features = [
  {
    icon: <HiUsers />,
    title: "Resident Management",
    desc: "Complete flat-wise database with KYC records, tenant tracking, and family member management.",
  },
  {
    icon: <HiCurrencyDollar />,
    title: "Maintenance & Billing",
    desc: "Automated monthly bill generation, payment tracking, receipts, and overdue reminders.",
  },
  {
    icon: <HiChatBubbleLeftRight />,
    title: "Complaint Management",
    desc: "Raise, track, and resolve complaints with priority levels and status updates.",
  },
  {
    icon: <HiBell />,
    title: "Notices & Announcements",
    desc: "Real-time communication with categorized notices, events, and important alerts.",
  },
  {
    icon: <HiShieldCheck />,
    title: "Visitor Management",
    desc: "Digital visitor logs, pre-approvals, security alerts, and delivery tracking.",
  },
  {
    icon: <HiChartBar />,
    title: "Reports & Analytics",
    desc: "Financial transparency with detailed reports, charts, and exportable data.",
  },
  {
    icon: <HiCalendarDays />,
    title: "Facility Booking",
    desc: "Book community hall, gym, swimming pool, and other amenities online.",
    highlight: true,
  },
  {
    icon: <HiLockClosed />,
    title: "Security Alerts",
    desc: "Emergency broadcasts, CCTV monitoring integration, and gate management.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">

        {/* Heading */}
        <h2>Everything You Need to Run Your Society</h2>
        <p>
          Comprehensive tools designed for housing societies, apartments, and residential complexes.
        </p>

        {/* Cards */}
        <div className="features-grid">
          {features.map((item, index) => (
            <div
              key={index}
              className={`feature-card ${item.highlight ? "highlight" : ""}`}
            >
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;