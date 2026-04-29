import React from "react";
import "./VisitorSection.css";
import visitorImg from "../../assets/Home-visitor2.png";

import {
  User,
  Phone,
  Users,
  Bell,
  Truck,
  UserCheck,
} from "lucide-react";

const VisitorSection = () => {

  const items = [
    { icon: <User />, text: "Visitor Management" },
    { icon: <UserCheck />, text: "Pre-approved guests" },
    { icon: <Phone />, text: "Mobile Intercom" },
    { icon: <Users />, text: "Daily Staff Management" },
    { icon: <Truck />, text: "Authorize Courier/Delivery" },
    { icon: <Bell />, text: "Emergency Alert" },
    
  ];

  return (
    <section className="home-visit-sec">
      <div className="home-visit-sec-container">

        {/* LEFT */}
        <div className="home-visit-sec-left">
          <h2 className="home-visit-sec-title">
            Visitor Management System
          </h2>

          <p className="home-visit-sec-desc">
            SocietyMS ensures complete security and seamless visitor handling 
            by digitizing gate entries, approvals, and real-time communication 
            between residents and security staff.
          </p>

          <div className="home-visit-sec-grid">

            <div className="home-visit-sec-item">
              <div className="home-visit-sec-icon-wrap">
                <div className="home-visit-sec-circle">
                  <User />
                </div>
              </div>
              <p>Visitor Management</p>
            </div>

            <div className="home-visit-sec-item">
              <div className="home-visit-sec-icon-wrap">
                <div className="home-visit-sec-circle">
                  <UserCheck />
                </div>
              </div>
              <p>Pre-approved Visitor Access</p>
            </div>

            <div className="home-visit-sec-item">
              <div className="home-visit-sec-icon-wrap">
                <div className="home-visit-sec-circle">
                  <Phone />
                </div>
              </div>
              <p>Smart Mobile Intercom</p>
            </div>

            <div className="home-visit-sec-item">
              <div className="home-visit-sec-icon-wrap">
                <div className="home-visit-sec-circle">
                  <Users />
                </div>
              </div>
              <p>Daily Staff & Maid Tracking</p>
            </div>

            <div className="home-visit-sec-item">
              <div className="home-visit-sec-icon-wrap">
                <div className="home-visit-sec-circle">
                  <Truck />
                </div>
              </div>
              <p>Courier & Delivery Approval</p>
            </div>

            <div className="home-visit-sec-item">
              <div className="home-visit-sec-icon-wrap">
                <div className="home-visit-sec-circle">
                  <Bell />
                </div>
              </div>
              <p>Emergency Alert</p>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="home-visit-sec-right">
          <img src={visitorImg} alt="visitor" />
        </div>

      </div>
    </section>
  );
};

export default VisitorSection;