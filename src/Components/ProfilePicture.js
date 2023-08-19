import { Avatar } from "@mui/material";
import React from "react";
import "./ProfilePicture.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ProfilePicture({ user }) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchAPI();
  }, []);
  let icon, col;
  if (user.userId === "usr-1") {
    icon = "A";
    col = "blue";
  } else if (user.userId === "usr-2") {
    icon = "B";
    col = "green";
  } else if (user.userId === "usr-3") {
    icon = "C";
    col = "gray";
  } else if (user.userId === "usr-4") {
    icon = "D";
    col = "orange";
  } else {
    icon = "E";
    col = "red";
  }
  return (
    <div className="profilePicture">
      <Avatar sx={{ bgcolor: `${col}` }}> {icon}</Avatar>
    </div>
  );
}

export default ProfilePicture;
