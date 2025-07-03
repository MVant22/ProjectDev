import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboardStyle.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark sticky-top">
        <div className="container-fluid">
          <button
            className="btn btn-outline-light d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
          >
            ☰
          </button>
          <a className="navbar-brand ms-2" href="#">Smart Inventory</a>
          <div className="d-flex align-items-center">
            <span className="text-white me-3">Admin</span>
          </div>
        </div>
      </nav>

      {/* Layout */}
      <div className="d-flex">
        {/* Sidebar (Offcanvas) */}
        <div className="offcanvas-lg offcanvas-start text-bg-dark" tabIndex="-1" id="sidebarMenu">
          <div className="offcanvas-body sidebar p-3">
            <h5>Navigation</h5>
            <Link to="/dashboard">Dashboard</Link><br />
            <Link to="/inventory">Inventory</Link><br />
            <a className="nav-link text-white" href="#">Transactions</a>
            <a className="nav-link text-white" href="#">Reports</a>
            <a className="nav-link text-white" href="#">Settings</a>
            <a className="nav-link text-white" href="#">Logout</a>
          </div>
        </div>

        {/* Main Content */}
        <main className="w-100 p-4">
          <h2>Welcome to the Smart Inventory Dashboard</h2>
          <p>This is where content will appear. You can display statistics, charts, and summaries here.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
