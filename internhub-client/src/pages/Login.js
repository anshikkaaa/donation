import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", name);
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h2>Intern Portal Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="email" placeholder="Email" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
