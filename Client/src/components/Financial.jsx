import React, { useEffect, useState } from "react";

const UserProfileDialog = ({ isOpen, onClose, onLogout }) => {
  return isOpen ? (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        background: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        zIndex: 999
      }}
    >
      <button className="sign_out" style={{ float: "right" }} onClick={onClose}>
        Close
      </button>
      <div>
        <button className="sign_out" onClick={onLogout}>
          Log Out
        </button>
      </div>
    </div>
  ) : null;
};

const UserProfile = () => {
  const [firstName, setFirstName] = useState("Aman");
  const [lastName, setLastName] = useState("Singh");
  const [initials, setInitials] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  useEffect(() => {
    const firstInitial = firstName.charAt(0);
    const lastInitial = lastName.charAt(0);
    setInitials(firstInitial + lastInitial);
  }, [firstName, lastName]);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
    closeDialog(); // Close the dialog after logging out
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        id="profileImage"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "antiquewhite",
          fontSize: "15px",
          color: "#3b3b3b",
          textAlign: "center",
          margin: "20px 0",
          lineHeight: "50px",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out"
        }}
        onClick={openDialog}
      >
        {initials}
      </div>
      <UserProfileDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onLogout={handleLogout}
      />
    </div>
  );
};

function Financial() {
  return (
    <financial>
      <div className="Dashboard">
        <div className="left-side">
          <img className="logo" src="favicon.png" alt="logo-img" />
          <span className="company_name">INVESCO</span>
          {/* Whereas recognition of the inherent dignity */}
        </div>
        <div className="search_bar">
          <input
            type="text"
            id="myInput"
            placeholder="What are you looking for today?"
          />
        </div>
        <div className="right-side">
          <UserProfile />
        </div>
      </div>
      {/* Dashboard Features */}
      <div className="feat">
        <div className="Financial_report">
          <ul className="icon">
            <li>
              <img className="home_icon" src="./Home.svg" alt="home-icon" />
            </li>
            <li>
              <img
                className="Insert_chart_icon"
                src="./Insert_chart.svg"
                alt="Insert_Chart-icon"
              />
            </li>
            <li>
              <img
                className="Show_chart_icon"
                src="./Show_chart.svg"
                alt="Show_Chart-icon"
              />
            </li>
          </ul>
        </div>

        <div className="details">
          <div className="Filter">
            <div className="Customisation">
              <p className="Company_name">
                <span>Name: </span>
                <span>A V Thomas & Co. Limited Unlisted Shares</span>
              </p>

              <button type="button" className="Buy" id="buy">
                <span>Buy</span>
              </button>
              <button type="button" className="Buy" id="sell">
                <span>Sell</span>
              </button>
            </div>
          </div>
          <div className="company_details">
            <div className="Table">
              <span className="Heading">Financial Report</span>
              <table className="comp_name">
                <thead>
                  <tr>
                    <td>Key Indicator</td>
                    <td>2023(*)</td>
                    <td>2022</td>
                    <td>2021</td>
                    <td>2020</td>
                    <td>2019</td>
                    <td>2018</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Revenue</td>
                    <td>9354.27</td>
                    <td>9204</td>
                    <td>6552</td>
                    <td>9345</td>
                    <td>6346</td>
                    <td>3270</td>
                  </tr>
                  <tr>
                    <td>Expense</td>
                    <td>4276.44</td>
                    <td>4299</td>
                    <td>12248</td>
                    <td>7602</td>
                    <td>2601</td>
                    <td>1550</td>
                  </tr>
                  <tr>
                    <td>EBIDTA</td>
                    <td>4901.79</td>
                    <td>4905</td>
                    <td>-2111</td>
                    <td>1743</td>
                    <td>3952</td>
                    <td>1720</td>
                  </tr>
                  <tr>
                    <td>Tax Expense</td>
                    <td>100.12</td>
                    <td>220</td>
                    <td>-578</td>
                    <td>408</td>
                    <td>495</td>
                    <td>158</td>
                  </tr>
                  <tr>
                    <td>PAT</td>
                    <td>249.53</td>
                    <td>610</td>
                    <td>-1599</td>
                    <td>1268</td>
                    <td>1276</td>
                    <td>297</td>
                  </tr>
                  <tr>
                    <td>EPS</td>
                    <td>4.91</td>
                    <td>5</td>
                    <td>-15</td>
                    <td>12</td>
                    <td>12</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Cash & Cash Equivalent</td>
                    <td>13065.49</td>
                    <td>13074</td>
                    <td>11580</td>
                    <td>6886</td>
                    <td>2078</td>
                    <td>1779</td>
                  </tr>
                  <tr>
                    <td>Current Asset</td>
                    <td>3447.3</td>
                    <td>75</td>
                    <td>41301</td>
                    <td>45254</td>
                    <td>26541</td>
                    <td>16551</td>
                  </tr>
                  <tr>
                    <td>Total Asset</td>
                    <td>55739.77</td>
                    <td>52292</td>
                    <td>54812</td>
                    <td>52808</td>
                    <td>38633</td>
                    <td>23542</td>
                  </tr>
                  <tr>
                    <td>Reserves</td>
                    <td>12336.23</td>
                    <td>9033</td>
                    <td>8385</td>
                    <td>8523</td>
                    <td>5801</td>
                    <td>2916</td>
                  </tr>
                  <tr>
                    <td>Total Equity</td>
                    <td>10282.8</td>
                    <td>10235</td>
                    <td>9586</td>
                    <td>9626</td>
                    <td>6812</td>
                    <td>3798</td>
                  </tr>
                  <tr>
                    <td>Non Current Liability</td>
                    <td>40971.89</td>
                    <td>41640</td>
                    <td>403</td>
                    <td>348</td>
                    <td>13404</td>
                    <td>9390</td>
                  </tr>
                  <tr>
                    <td>Total Liability</td>
                    <td>42055.66</td>
                    <td>42057</td>
                    <td>45226</td>
                    <td>43182</td>
                    <td>31821</td>
                    <td>19743</td>
                  </tr>
                  <tr>
                    <td>Total Equity & Liability</td>
                    <td>52417.6</td>
                    <td>52292</td>
                    <td>54812</td>
                    <td>52808</td>
                    <td>38633</td>
                    <td>23542</td>
                  </tr>
                  <tr>
                    <td>Operaing Activities</td>
                    <td>593</td>
                    <td>634</td>
                    <td>1137</td>
                    <td>-7614</td>
                    <td>-12580</td>
                    <td>-10591</td>
                  </tr>
                  <tr>
                    <td>Investing Activities</td>
                    <td>-15.62</td>
                    <td>-17</td>
                    <td>-20</td>
                    <td>-47</td>
                    <td>-44</td>
                    <td>-31</td>
                  </tr>
                  <tr>
                    <td>Financing Activities</td>
                    <td>-2805.28</td>
                    <td>-2661</td>
                    <td>3577</td>
                    <td>12807</td>
                    <td>12780</td>
                    <td>10363</td>
                  </tr>
                  <tr>
                    <td>Net Cash Flow</td>
                    <td>-2018.04</td>
                    <td>-2044</td>
                    <td>4695</td>
                    <td>5146</td>
                    <td>155</td>
                    <td>-260</td>
                  </tr>
                </tbody>
              </table>
              <span className="note">
                <pre>
                  (*): Our 2023 project value isn't just a number; it's a
                  forward-thinking estimate, shaped by machine learning and
                  rooted in past data for a more insightful projection
                </pre>
              </span>
            </div>
          </div>
        </div>
      </div>
    </financial>
  );
}

export default Financial;
