import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";

function App() {
  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("leaderboard"));
    if (!existing || existing.length === 0) {
      const staticUsers = [
        { name: "Anshika Jindal", donations: 1200 },
        { name: "Rahul Mehra", donations: 980 },
        { name: "Simran Kaur", donations: 860 },
        { name: "Aman Verma", donations: 750 },
        { name: "Pooja Rani", donations: 690 },
      ];
      localStorage.setItem("leaderboard", JSON.stringify(staticUsers));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
