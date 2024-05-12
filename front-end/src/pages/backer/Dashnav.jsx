import React from 'react';

function Sidebar() {
  return (
    <div className="col-lg-4">
      <ul>
        <li>Dashboard</li>
        <li>Backers</li>
        <li>Company</li>
        <li>Edit profile</li>
      </ul>
    </div>
  );
}

function Outlet({ children }) {
  return <div className="col-lg-8">{children}</div>;
}

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <Outlet>
          {/* Content for Dashboard */}
          <h2>Dashboard Content Goes Here</h2>
        </Outlet>
      </div>
    </div>
  );
}

export default Dashboard;
