import React from "react";
import "./FeaturesGrid.css";
import {
  HiOutlineUsers,
  HiOutlineCurrencyRupee,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBell,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCalendarDays,
  HiOutlineLockClosed,
} from "react-icons/hi2";

const features = [
  {
    icon: <HiOutlineUsers />,
    title: "Resident Management",
    desc: "Manage residents, KYC records, tenants, and family members easily.",
  },
  {
    icon: <HiOutlineCurrencyRupee />,
    title: "Maintenance & Billing",
    desc: "Automated billing, payment tracking, receipts, and reminders.",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight />,
    title: "Complaint Management",
    desc: "Track and resolve complaints with priority and status updates.",
  },
  {
    icon: <HiOutlineBell />,
    title: "Notices & Alerts",
    desc: "Send announcements, alerts, and notifications in real-time.",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Visitor Management",
    desc: "Track visitors, approvals, deliveries, and security logs.",
  },
  {
    icon: <HiOutlineChartBar />,
    title: "Reports & Analytics",
    desc: "Detailed reports for finance, payments, and society insights.",
  },
  {
    icon: <HiOutlineCalendarDays />,
    title: "Facility Booking",
    desc: "Book amenities like gym, hall, and swimming pool online.",
  },
  {
    icon: <HiOutlineLockClosed />,
    title: "Security Alerts",
    desc: "Emergency alerts, CCTV integration, and gate management.",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="featuresGrid-section">
      <div className="featuresGrid-container">
        
        {/* Heading */}
        <h2 className="featuresGrid-title">Powerful Features</h2>
        <p className="featuresGrid-subtitle">
          Everything you need to manage your society efficiently — all in one place.
        </p>

        {/* Grid */}
        <div className="featuresGrid-grid">
          {features.map((item, index) => (
            <div className="featuresGrid-card" key={index}>
              <div className="featuresGrid-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesGrid;