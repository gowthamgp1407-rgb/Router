import { Link, Outlet } from "react-router-dom";

function Students() {
  return (
    <div className="page">

      <div className="page-header">
        <span className="badge">
          Student Management
        </span>

        <h1>Students</h1>

        <p>
          Manage student information using nested routing.
        </p>
      </div>

      <div className="student-layout">

        {/* Student Navigation */}

        <div className="student-sidebar">

          <h3>Student Menu</h3>

          <Link to="/students">
            👥 All Students
          </Link>

          <Link to="/students/add">
            ➕ Add Student
          </Link>

          <Link to="/students/details">
            📋 Student Details
          </Link>

        </div>


        {/* Child Components Appear Here */}

        <div className="student-content">

          <Outlet />

        </div>

      </div>

    </div>
  );
}

export default Students;