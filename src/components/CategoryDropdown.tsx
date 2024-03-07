import React from "react";

function CategoryDropdown() {
  return (
    <>
      <div className="dropdown is-active">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Select a category</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              General knowledge
            </a>
            <a href="#" className="dropdown-item">
              Computers
            </a>
            <a href="#" className="dropdown-item">
              History
            </a>
            <a href="#" className="dropdown-item">
              Sports
            </a>
            <a href="#" className="dropdown-item">
              Films
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryDropdown;