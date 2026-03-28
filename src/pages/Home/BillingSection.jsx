import { useNavigate } from "react-router-dom";
import "./BillingSection.css";
import billingImg from "../../assets/home-billing1.png";
import { FaCalculator, FaBalanceScale, FaCloud, FaCheck } from "react-icons/fa";

const BillingSection = () => {
  const navigate = useNavigate();

  return (
    <section className="home-bill-sec">
      <h2 className="home-bill-sec-title">
        Complete Society Billing & Accounting Solution
      </h2>

      <p className="home-bill-sec-subtitle">
         SocietyMS simplifies billing, accounting, and financial management with 
        automation, real-time tracking, and accurate reporting for housing societies.
      </p>

      <div className="home-bill-sec-container">
        {/* LEFT IMAGE */}
        <div className="home-bill-sec-left">
          <img src={billingImg} alt="billing" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="home-bill-sec-right">

          <div className="home-bill-sec-card">
            <FaCalculator className="home-bill-sec-icon" />
            <div>
              <h3>Auto Penalty Calculation</h3>
              <p>Generate monthly bills instantly with auto calculations</p>
            </div>
          </div>

          <div className="home-bill-sec-card">
            <FaBalanceScale className="home-bill-sec-icon" />
            <div>
              <h3>Financial Reports & Compliance</h3>
              <p>Balance sheets, income & expense reports as per society rules</p>
            </div>
          </div>

          <div className="home-bill-sec-card">
            <FaCloud className="home-bill-sec-icon" />
            <div>
              <h3>Seamless Data Integration</h3>
              <p>Export and manage financial data with external accounting tools</p>
            </div>
          </div>

          {/* Checklist */}
          <div className="home-bill-sec-checklist">
            <div>
              <p><FaCheck /> Instant bill generation</p>
              <p><FaCheck /> GST Billing</p>
              <p><FaCheck /> Receipt & expense tracking</p>
            </div>

            <div>
              <p><FaCheck /> Online payment integration</p>
              <p><FaCheck /> Automated payment reminders</p>
              <p><FaCheck /> Real-time financial insights</p>
            </div>
          </div>

          {/* Button */}
          <button 
      className="home-bill-sec-btn"
      onClick={() => navigate("/features")}
    >
      Explore Features →
    </button>


        </div>
      </div>
    </section>
  );
};

export default BillingSection;