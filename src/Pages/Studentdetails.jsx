function StudentDetails() {

  return (
    <div>

      <h2>Student Details</h2>

      <p>
        View detailed information about a student.
      </p>


      <div className="details-card">

        <div className="avatar">
          AK
        </div>


        <div>

          <h2>
            Arun Kumar
          </h2>

          <p>
            <strong>Student ID:</strong> STU001
          </p>

          <p>
            <strong>Email:</strong> arun@gmail.com
          </p>

          <p>
            <strong>Phone:</strong> 9876543210
          </p>

          <p>
            <strong>Course:</strong> React Development
          </p>

          <p>
            <strong>Status:</strong> Active
          </p>

        </div>

      </div>

    </div>
  );
}

export default StudentDetails;