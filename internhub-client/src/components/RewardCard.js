import React from "react";

function RewardCard({ name, unlocked }) {
  return (
    <div className={`reward-card ${unlocked ? "unlocked" : "locked"}`}>
      <h4>{name}</h4>
      <p>{unlocked ? "Unlocked" : "Locked"}</p>
    </div>
  );
}

export default RewardCard;
