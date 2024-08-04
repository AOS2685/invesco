import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
        zIndex: 999,
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
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [initials, setInitials] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  useEffect(() => {
    const firstInitial = localStorage.getItem("firstName").charAt(0);
    const lastInitial = localStorage.getItem("lastName").charAt(0);
    setInitials(firstInitial + lastInitial);
  }, [firstName, lastName]);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
    closeDialog(); // Close the dialog after logging out
    localStorage.removeItem("auth-token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");

    navigate("/login");
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
          transition: "all 0.3s ease-in-out",
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

function Dashboard() {
  const companies = [
    {
      name: "A V Thomas & Co. Limited Unlisted Shares",
      price: "₹ 20865",
      sector: "Manufacturing",
    },
    {
      name: "Arohan Financial Services Unlisted Shares",
      price: "₹ 160",
      sector: "Financial",
    },
    {
      name: "Bira91 (B9 Beverages Pvt Ltd) Unlisted Shares",
      price: "₹ 653",
      sector: "Beverage",
    },
    {
      name: "Boat Unlisted Shares",
      price: "₹ 920",
      sector: "Manufacturing",
    },
    {
      name: "Capgemini Technology Services India Limited Unlisted Shares",
      price: "₹ 11984",
      sector: "Technology",
    },
    {
      name: "Capital Small Finance Bank Unlisted Shares",
      price: "₹ 417",
      sector: "Financial",
    },
    {
      name: "Chennai Super Kings Unlisted Shares",
      price: "₹ 193",
      sector: "Sports",
    },
    {
      name: "Cochin International Airport Limited Unlisted Shares",
      price: "₹ 209",
      sector: "Aviation",
    },
    {
      name: "ELCID Investments Limited Shares",
      price: "₹ 149800",
      sector: "Financial",
    },
    {
      name: "Empire Spices and Foods Ltd Unlisted Shares",
      price: "₹ 455",
      sector: "Manufacturing",
    },
    {
      name: "ESL Steel Limited Unlisted Shares",
      price: "₹ 32",
      sector: "Manufacturing",
    },
    {
      name: "Fincare Small Finance Bank Unlisted Shares",
      price: "₹ 198",
      sector: "Financial",
    },
    {
      name: "Fino Paytech Limited Unlisted Shares",
      price: "₹ 139",
      sector: "Financial",
    },
    {
      name: "Flipkart India Unlisted Shares",
      price: "₹ 19260",
      sector: "Retail",
    },
    {
      name: "Frick India Pvt Ltd Unlisted Shares",
      price: "₹ 8132",
      sector: "Manufacturing",
    },
    {
      name: "HDB Financial Services Limited Unlisted Shares",
      price: "₹ 664",
      sector: "Financial",
    },
    {
      name: "HDFC Securities Limited Unlisted Shares",
      price: "₹ 11770",
      sector: "Financial",
    },
    {
      name: "Hella India Lighting Limited Unlisted Shares",
      price: "₹ 963",
      sector: "Manufacturing",
    },
    {
      name: "Hero Fincorp Limited Unlisted Shares",
      price: "₹ 1263",
      sector: "Financial",
    },
    {
      name: "Hexaware Technologies Ltd Unlisted Shares",
      price: "₹ 797",
      sector: "Technology",
    },
    {
      name: "Honeywell Electrical Devices And Systems India Ltd",
      price: "₹ 4045",
      sector: "Manufacturing",
    },
    {
      name: "Indian Potash Limited Unlisted Share",
      price: "₹ 1519",
      sector: "Manufacturing",
    },
    {
      name: "Indofil Industries Limited Unlisted Shares",
      price: "₹ 679",
      sector: "Manufacturing",
    },
    {
      name: "Kannur International Airport Limited Unlisted Shares",
      price: "₹ 110",
      sector: "Aviation",
    },
    {
      name: "LAVA International Limited Unlisted Shares",
      price: "₹ 105",
      sector: "Manufacturing",
    },
    {
      name: "LE Travenues Technology (IXIGO) Unlisted Shares",
      price: "₹ 98",
      sector: "Technology",
    },
    {
      name: "Maharashtra Knowledge Corporation Unlisted Shares",
      price: "₹ 470",
      sector: "Education",
    },
    {
      name: "Mayasheel Retail India Ltd Unlisted Shares",
      price: "₹ 27",
      sector: "Retail",
    },
    {
      name: "Merino Industries Limited Unlisted Shares",
      price: "₹ 3103",
      sector: "Manufacturing",
    },
    {
      name: "Metropolitan Stock Exchange (MSEI) Unlisted Shares",
      price: "₹ 1.12",
      sector: "Financial",
    },
    {
      name: "Mobikwik Unlisted Shares",
      price: "₹ 353",
      sector: "Financial",
    },
    {
      name: "Mohan Meakin Limited Unlisted Shares",
      price: "₹ 1766",
      sector: "Beverage",
    },
    {
      name: "Moneycontrol (E-Eighteen.Com Limited) Unlisted Shares",
      price: "₹ 4280",
      sector: "Technology",
    },
    {
      name: "Motilal Oswal Home Finance Limited Unlisted Shares",
      price: "₹ 14.4",
      sector: "Financial",
    },
    {
      name: "Nayara Energy (Formerly Essar Oil) Limited Unlisted Shares",
      price: "₹ 294",
      sector: "Retail",
    },
    {
      name: "NCDEX (National Commodity & Derivatives Exchange) Limited Unlisted Shares",
      price: "₹ 407",
      sector: "Financial",
    },
    {
      name: "NCL Buildtek Limited Unlisted Shares",
      price: "₹ 235",
      sector: "Manufacturing",
    },
    {
      name: "NSE India Unlisted Shares",
      price: "₹ 3600",
      sector: "Financial",
    },
    {
      name: "Oravel Stays Ltd (OYO Rooms) Unlisted Shares",
      price: "₹ 80",
      sector: "Technology",
    },
    {
      name: "Orbis Financial Corporation Ltd Unlisted Shares",
      price: "₹ 175",
      sector: "Financial",
    },
    {
      name: "Paymate India Ltd Unlisted Shares",
      price: "₹ 450",
      sector: "Financial",
    },
    {
      name: "Pharmeasy Unlisted Shares",
      price: "₹ 13.4",
      sector: "Retail",
    },
    {
      name: "Pharmed Limited Unlisted Shares",
      price: "₹ 920",
      sector: "Manufacturing",
    },
    {
      name: "Philips India Ltd Unlisted Share Price",
      price: "₹ 985",
      sector: "Manufacturing",
    },
    {
      name: "PNB Finance and Industries Ltd Unlisted Shares",
      price: "₹ 7704",
      sector: "Financial",
    },
    {
      name: "Polymatech Electronics Pvt Ltd Unlisted Shares",
      price: "₹ 705",
      sector: "Manufacturing",
    },
    {
      name: "Religare Health Insurance Unlisted Shares",
      price: "₹ 191",
      sector: "Financial",
    },
    {
      name: "Roots Multiclean Limited Unlisted Share",
      price: "₹ 4066",
      sector: "Manufacturing",
    },
    {
      name: "SBI Fund Management Limited Unlisted Shares",
      price: "₹ 1252",
      sector: "Manufacturing",
    },
    {
      name: "SBI General Insurance Ltd Unlisted Shares",
      price: "₹ 1241",
      sector: "Financial",
    },
    {
      name: "Sterlite Power Transmission Limited Unlisted Shares",
      price: "₹ 600",
      sector: "Manufacturing",
    },
    {
      name: "Studds Accessories Limited Unlisted Shares",
      price: "₹ 910",
      sector: "Manufacturing",
    },
    {
      name: "Swiggy Unlisted Shares",
      price: "₹ 348",
      sector: "Online Food",
    },
    {
      name: "Tata Capital Limited Unlisted Shares",
      price: "₹ 439",
      sector: "Financial",
    },
    {
      name: "Tata Technologies Unlisted Shares",
      price: "₹ 870",
      sector: "Technology",
    },
    {
      name: "Utkarsh Coreinvest Limited Unlisted Shares",
      price: "₹ 289",
      sector: "Financial",
    },
  ];

  const [selectedSector, setselectedSector] = useState("");
  const [filteredCompanies, setfilteredCompanies] = useState(companies);

  const handleViewMore = (index) => {
    console.log(`View more clicked for ${filteredCompanies[index].name}`);
  };

  const handleFilterChange = (event) => {
    setselectedSector(event.target.value);
  };

  const applyFilter = () => {
    if (selectedSector === "") {
      setfilteredCompanies(companies);
    } else {
      const filtered = companies.filter(
        (company) => company.sector === selectedSector
      );
      setfilteredCompanies(filtered);
    }
  };

  return (
    <dashboard>
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
        <div className="Dashboard_features">
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
              <select onChange={handleFilterChange} value={selectedSector}>
                <option value="">All Sectors</option>
                <option value="Aviation">Aviation</option>
                <option value="Beverage">Beverage</option>
                <option value="Education">Education</option>
                <option value="Financial">Financial</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Online Food">Online Food</option>
                <option value="Retail">Retail</option>
                <option value="Sports">Sports</option>
              </select>
              <button
                type="button"
                className="Apply_Filter"
                onClick={applyFilter}
              >
                <span>Apply Filter</span>
              </button>
            </div>
          </div>
          <div className="company_details">
            <div className="Table">
              <table className="comp_name">
                <thead>
                  <tr>
                    <td>Company Name</td>
                    <td>Price</td>
                    <td>Operation</td>
                  </tr>
                </thead>
                <tbody>
                  {filteredCompanies.map((company, index) => (
                    <tr key={index}>
                      <td>{company.name}</td>
                      <td>{company.price}</td>
                      <td>
                        <button
                          id="view_more"
                          onClick={() => handleViewMore(index)}
                        >
                          View More
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* <tr>
                    <td>A V Thomas & Co. Limited Unlisted Shares</td>
                    <td>20865</td>
                    <td>View More</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </dashboard>
  );
}

export default Dashboard;
