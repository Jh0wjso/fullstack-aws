import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header
      style={{
        backgroundColor: "#5e0392",
        color: "#fff",
        padding: "10px 20px",
        textAlign: "center",
      }}
    >
      <h1>Game Sessions</h1>
      <Link to="/" style={{ color: "#fff", marginRight: "10px" }}>
        All Sessions
      </Link>
      <Link to="/create-session" style={{ color: "#fff" }}>
        Create Session
      </Link>
    </header>
  );
};

export default Header;
