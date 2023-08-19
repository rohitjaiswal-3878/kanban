import React from "react";
import "./Card.css";
import { AccountCircle, FiberManualRecord } from "@mui/icons-material";
import ProfilePicture from "./ProfilePicture";

function Card({ data, userdata }) {
  return (
    <div className="card">
      <div className="card_top">
        <p>{data.id}</p>
        <ProfilePicture user={data} />
      </div>
      <div className="card_middle">
        <p>{data.title}</p>
      </div>
      <div className="card_bottom">
        <div className="card_bottom_box1"></div>
        <div className="card_bottom_box2">
          <FiberManualRecord />
          <p>{data.tag[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
