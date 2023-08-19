import React from "react";
import "./Board.css";
import {
  AccountCircle,
  Add,
  FormatListBulleted,
  MoreHoriz,
  NotListedLocation,
  PanoramaOutlined,
  Pending,
  RemoveCircle,
  Warning,
  Wifi,
  Wifi2Bar,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import Card from "./Card";
function Board({ status, tickets, users, grouping, userid }) {
  let statusIcon, heading, pIcon, heading1;
  console.log(users[0].name);

  if (grouping == 1) {
    heading = "No priority";
    pIcon = <MoreHoriz />;
  } else if (grouping == 2) {
    heading = "Low";
    pIcon = <RemoveCircle />;
  } else if (grouping == 3) {
    heading = "Medium";
    pIcon = <Wifi2Bar />;
  } else if (grouping == 4) {
    heading = "High";
    pIcon = <Wifi />;
  } else if (grouping == 5) {
    heading = "Urgnet";
    pIcon = <Warning />;
  }
  if (userid === "usr-1") {
    heading1 = users[0].name;
  } else if (userid === "usr-2") {
    heading1 = users[1].name;
  } else if (userid === "usr-3") {
    heading1 = users[2].name;
  } else if (userid === "usr-5") {
    heading1 = users[3].name;
  } else {
    heading1 = users[4].name;
  }

  if (status === "Todo") {
    statusIcon = <NotListedLocation />;
  } else if (status === "In progress") {
    statusIcon = <Pending />;
  } else if (status === "Backlog") {
    statusIcon = <FormatListBulleted />;
  }
  return (
    <div className="board">
      <div className="board_top">
        <div className="board_top_left">
          {grouping > 0 ? pIcon : statusIcon}
          <p>{grouping > 0 ? heading : userid ? heading1 : status}</p>
          <p style={{ color: "grey" }}>{tickets.length}</p>
        </div>
        <div className="board_top_right">
          <Add />
          <MoreHoriz />
        </div>
      </div>
      <div className="board_cards">
        {tickets.map((ticket) => (
          <Card key={ticket.id} data={ticket} />
        ))}
      </div>
    </div>
  );
}

export default Board;
