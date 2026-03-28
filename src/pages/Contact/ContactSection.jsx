import React, { useState } from "react";import "./ContactSection.css";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // 🔥 Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name → only letters
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;

    setForm({ ...form, [name]: value });
  };

  // 🔥 Validation
  const validate = () => {
    let newErrors = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    // Subject
    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Message
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // 🔥 Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form Submitted Successfully ✅");

      // Reset form
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <section className="contactSec-main">

      {/* HEADING */}
      <div className="contactSec-header">
        <h2>Get in Touch</h2>
        <p>Have a question or need support? We'd love to hear from you.</p>
      </div>

      {/* CONTENT */}
      <div className="contactSec-container">

        {/* LEFT SIDE */}
        <div className="contactSec-left">

          <div className="contactSec-card">
            <div className="contactSec-icon">
              <FiMail />
            </div>
            <div>
              <h4>Email</h4>
              <p className="contactSec-bold">info@societyms.com</p>
              <span>We respond within 24 hours</span>
            </div>
          </div>

          <div className="contactSec-card">
            <div className="contactSec-icon">
              <FiPhone />
            </div>
            <div>
              <h4>Phone</h4>
              <p className="contactSec-bold">+91 98765 43210</p>
              <span>Mon–Fri, 9am–6pm </span>
            </div>
          </div>

          <div className="contactSec-card">
            <div className="contactSec-icon">
              <FiMapPin />
            </div>
            <div>
              <h4>Office</h4>
              <p className="contactSec-bold">Nagpur</p>
              <span>Visit us in person</span>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contactSec-formBox">
          <h3>Send a Message</h3>

          <form className="contactSec-form"onSubmit={handleSubmit}>

            <div className="contactSec-row">
              <input type="text" name="name" placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
              />
               {errors.name && <span className="error">{errors.name}</span>}

              <input type="email" name="email" placeholder="Your email" 
                  value={form.email}
                  onChange={handleChange}
                  />
                   {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <input type="text" name="subject" placeholder="Subject"
              value={form.subject}
                onChange={handleChange}
              />
              {errors.subject && <span className="error">{errors.subject}</span>}

            <textarea name="message" placeholder="Your message..." rows="5"
              value={form.message}
                onChange={handleChange}
              >
            </textarea>
                          {errors.message && <span className="error">{errors.message}</span>}


            <button type="submit" className="contactSec-btn">
              <FiSend /> Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;