import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-light vh-100 d-flex flex-column align-items-start p-3">
      <h2 className="fs-4 fw-bold">AppointDoc</h2>
      <ul className="nav flex-column mt-4 w-100">
        <li className="nav-item">
          <a href="#" className="nav-link text-dark active d-flex align-items-center">
            <i className="bi bi-house me-2"></i>
            Home
          </a>
        </li>
        <li className="nav-item">
          <Link to="/appointments" className="nav-link">
            <i className="bi bi-calendar-check"></i>
            <span>Appointments</span>
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-person-plus me-2"></i>
            Apply Doctor
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
