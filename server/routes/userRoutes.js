// routes/userRoutes.js
const express = require("express");
const router = express.Router();

const dummyUsers = [
  { name: "Anshika Jindal", referralCode: "anshikajindal2025", donations: 750 },
  { name: "Ravi Kumar", referralCode: "ravikumar2025", donations: 1200 },
  { name: "Sneha Patel", referralCode: "snehapatel2025", donations: 950 },
  { name: "Neha Singh", referralCode: "nehasingh2025", donations: 700 },
  { name: "Amit Shah", referralCode: "amitshah2025", donations: 600 },
];

// Get random user
router.get("/random", (req, res) => {
  const randomUser = dummyUsers[Math.floor(Math.random() * dummyUsers.length)];
  res.json(randomUser);
});

module.exports = router;
