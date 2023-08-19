import React from "react";
import { Menu, useScrollTrigger } from "@mui/material";
import { KeyboardArrowDownSharp, TuneSharp } from "@mui/icons-material";
import { useState } from "react";

import "./DisplayButton.css";

function DisplayButton({ onPriorityChange }) {
  const [open, setOpen] = useState(false);
  function handleOpenMenu() {
    setOpen(!open);
  }
  function handlePriorityOptionChange(event) {
    const selectedPriority = event.target.value;
    onPriorityChange(selectedPriority);
  }
  return (
    <div className="displayButton">
      <div className="displayButton_btn" onClick={handleOpenMenu}>
        <TuneSharp />
        <p>Display</p>
        <KeyboardArrowDownSharp />
      </div>
      {open && (
        <div className="displayButton_dropdown">
          <div className="displayButton_dropdown_left">
            <p>Grouping</p> <p>ordering</p>
          </div>
          <div className="displayButton_dropdown_right">
            <select onChange={handlePriorityOptionChange}>
              <option value={`status`}>Status</option>
              <option value={`user`}>User</option>
              <option value={`priority`}>Priority</option>
            </select>

            <select onChange={handlePriorityOptionChange}>
              <option value={`Priority`}>Priority</option>
              <option value={`title`}>title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayButton;
