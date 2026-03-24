import React from "react";
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const data = [
  {
    text: `"SocietyMS has transformed how we manage our society. Billing is automated, complaints are tracked efficiently, and communication has never been better."`,
    name: "Arun Mehta",
    role: "Society President, Green Valley",
    initials: "AM",
  },
  {
    text: `"I can pay my maintenance, track complaints, and get notices all in one app. It's made my life so much easier as a resident."`,
    name: "Kavita Reddy",
    role: "Resident, Sunrise Apartments",
    initials: "KR",
  },
  {
    text: `"The admin dashboard gives us complete visibility. We can manage everything from bills to visitor logs. Highly recommended for any society."`,
    name: "Sunil Jain",
    role: "Secretary, Palm Heights",
    initials: "SJ",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">

        {/* Heading */}
        <h2>Trusted by Societies</h2>
        <p>See what our users have to say</p>

        {/* Cards */}
        <div className="testimonials-grid">
          {data.map((item, index) => (
            <div className="testimonial-card" key={index}>
              
              {/* Stars */}
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Text */}
              <p className="testimonial-text">{item.text}</p>

              {/* User */}
              <div className="user">
                <div className="avatar">{item.initials}</div>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;