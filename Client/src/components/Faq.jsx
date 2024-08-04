import React from "react";

function Faq() {
  return (
    <faq>
      <div className="FAQS">
        <h1>FAQS (Frequently Asked Questions)</h1>
        <div className="faq">
          <input id="faq-a" type="checkbox" />
          <label htmlFor="faq-a">
            <p className="faq-heading">What is an Unlisted Stock?</p>
            <div className="faq-arrow"></div>
            <div className="faq-content">
              <p className="faq-text">
                Unlisted stocks are shares of comapnies that aren't traded on
                public on public stock exchanges. They offer unique investment
                opportunities.
              </p>
            </div>
          </label>

          <input id="faq-b" type="checkbox" />
          <label htmlFor="faq-b">
            <p className="faq-heading">Why Should you choose our platform?</p>
            <div className="faq-arrow"></div>
            <div className="faq-content">
              <p className="faq-text">
                We specialize in unlisted stocks, providing insights,
                predictions, and a user-friendly trading experience.
              </p>
            </div>
          </label>

          <input id="faq-c" type="checkbox" />
          <label htmlFor="faq-c">
            <p className="faq-heading">Is My Data Secure?</p>
            <div className="faq-arrow"></div>
            <div className="faq-content">
              <p className="faq-text">
                Yes, we prioritize your data security with robust measures in
                place.
              </p>
            </div>
          </label>

          <input id="faq-d" type="checkbox" />
          <label htmlFor="faq-d">
            <p className="faq-heading">How Can I Get Started?</p>
            <div className="faq-arrow"></div>
            <div className="faq-content">
              <p className="faq-text">
                Sign up, explore our platform, and begin trading. It's that
                simple!{" "}
              </p>
            </div>
          </label>

          <input id="faq-e" type="checkbox" />
          <label htmlFor="faq-e">
            <p className="faq-heading">
              Do I Need Experience to Use Your Platform?
            </p>
            <div className="faq-arrow"></div>
            <div className="faq-content">
              <p className="faq-text">
                Not at all! Our user-friendly interface and predictive tools are
                designed for all levels of investors.
              </p>
            </div>
          </label>

          <input id="faq-f" type="checkbox" />
          <label htmlFor="faq-f">
            <p className="faq-heading">
              What Sets Your Predictive Model Apart?
            </p>
            <div className="faq-arrow"></div>
            <div className="faq-content">
              <p className="faq-text">
                Our machine learning model saves you time by predicting stock
                growth, making informed decisions easier.
              </p>
            </div>
          </label>
        </div>
      </div>
    </faq>
  );
}

export default Faq;
