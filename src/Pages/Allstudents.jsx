import { Link } from "react-router-dom";

function AllStudents() {

  const students = [
    {
      id: 1,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      course: "React Development",
    },

    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      course: "Data Analytics",
    },

    {
      id: 3,
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      course: "Web Development",
    },

    {
      id: 4,
      name: "Divya Raj",
      email: "divya@gmail.com",
      course: "UI/UX Design",
    },
  ];

  return (
    <div>

      <div className="student-title">

        <div>
          <h2>All Students</h2>

          <p>
            List of all registered students.
          </p>
        </div>

        <Link
          to="/students/add"
          className="button"
        >
          + Add Student
        </Link>

      </div>


      <table>

        <thead>
          <tr>
            <th>ID</th>

            <th>Name</th>

            <th>Email</th>

            <th>Course</th>
          </tr>
        </thead>


        <tbody>

          {students.map((student) => (

            <tr key={student.id}>

              <td>
                {student.id}
              </td>

              <td>
                {student.name}
              </td>

              <td>
                {student.email}
              </td>

              <td>
                {student.course}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AllStudents;