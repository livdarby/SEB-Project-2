import React from "react";

function DifficultyDropdown() {
  return (
    <>
      <div className="dropdown is-active">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Select difficulty level</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              Easy
            </a>
            <a href="#" className="dropdown-item">
              Medium
            </a>
            <a href="#" className="dropdown-item">
              Hard
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DifficultyDropdown;