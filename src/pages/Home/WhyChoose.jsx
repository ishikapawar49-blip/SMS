import React from "react";
import "./WhyChoose.css";
import {
  HiEye,
  HiBolt,
  HiShieldCheck,
  HiDevicePhoneMobile,
} from "react-icons/hi2";

const data = [
  {
    icon: <HiEye />,
    title: "Transparency",
    desc: "Complete visibility into society finances and operations",
  },
  {
    icon: <HiBolt />,
    title: "Automation",
    desc: "Automate billing, reminders, and routine tasks",
  },
  {
    icon: <HiShieldCheck />,
    title: "Security",
    desc: "Visitor tracking, CCTV integration, and security alerts",
  },
  {
    icon: <HiDevicePhoneMobile />,
    title: "Ease of Use",
    desc: "Intuitive interface accessible from any device",
  },
];

const WhyChoose = () => {
  return (
    <section className="why">
      <div className="why-container">

        <h2>Why Choose SocietyMS?</h2>

        <div className="why-grid">
          {data.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;