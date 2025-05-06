import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Something went wrong on this page</h1>
      <Button
        style={{
          border: "1px solid blue",
          padding: "10px 20px",
          marginTop: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "blue",
          }}
        >
          Home
        </Link>
      </Button>
    </div>
  );
};

export default Error;