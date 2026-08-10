function AddStudent() {

  const handleSubmit = (event) => {

    event.preventDefault();

    alert("Student added successfully!");

  };

  return (
    <div>

      <div className="student-title">

        <div>

          <h2>Add Student</h2>

          <p>
            Add a new student.
          </p>

        </div>

      </div>


      <form
        className="student-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label>First Name</label>

          <input
            type="text"
            placeholder="Enter first name"
            required
          />

        </div>


        <div className="form-group">

          <label>Last Name</label>

          <input
            type="text"
            placeholder="Enter last name"
            required
          />

        </div>


        <div className="form-group">

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter email"
            required
          />

        </div>


        <div className="form-group">

          <label>Phone</label>

          <input
            type="tel"
            placeholder="Enter phone number"
            required
          />

        </div>


        <div className="form-group">

          <label>Course</label>

          <select required>

            <option value="">
              Select Course
            </option>

            <option>
              React Development
            </option>

            <option>
              Data Analytics
            </option>

            <option>
              Web Development
            </option>

            <option>
              UI/UX Design
            </option>

          </select>

        </div>


        <button
          type="submit"
          className="button"
        >
          Add Student
        </button>

      </form>

    </div>
  );
}

export default AddStudent;