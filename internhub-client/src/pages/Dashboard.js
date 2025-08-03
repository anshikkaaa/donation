import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./styles.css";


const Dashboard = () => {
  const [name, setName] = useState("Guest");
  const [referralCode, setReferralCode] = useState("guest2025");
  const [donations, setDonations] = useState(0);

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    const randomDonations = Math.floor(Math.random() * 1000) + 100;

    if (storedName) {
      setName(storedName);
      setReferralCode(`${storedName.toLowerCase().replace(/\s+/g, "")}2025`);
    }

    setDonations(randomDonations);

    const newUser = {
      name: storedName || "Guest",
      donations: randomDonations,
    };

    // Handle Leaderboard Update
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [
      { name: "Ravi Kumar", donations: 1200 },
      { name: "Sneha Patel", donations: 950 },
      { name: "Amit Shah", donations: 800 },
      { name: "Neha Singh", donations: 700 },
      { name: "Karan Joshi", donations: 600 },
    ];

    const exists = leaderboard.find((user) => user.name === newUser.name);

    if (!exists) {
      leaderboard.push(newUser);
      leaderboard.sort((a, b) => b.donations - a.donations);
      leaderboard = leaderboard.slice(0, 5); // Keep top 5
      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Welcome, {name}</h2>
        <p>
          <strong>Referral Code:</strong> {referralCode}
        </p>
        <p>
          <strong>Total Donations Raised:</strong> ₹{donations}
        </p>

        <h3>🎁 Rewards / Unlockables</h3>
        <ul>
          <li>🎖️ Badge for 500+ donations</li>
          <li>🏆 Early Access to Intern Program</li>
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
