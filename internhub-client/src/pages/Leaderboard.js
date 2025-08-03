import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./styles.css";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setLeaders(stored);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>🏆 Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Donations</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((user, index) => (
              <tr key={user.name}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>₹{user.donations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Leaderboard;
