import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import Students from "./pages/Students";
import AllStudents from "./pages/AllStudents";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";

import PageNotFound from "./pages/PageNotFound";

import "./App.css";


function App() {

  return (

    <BrowserRouter>

      {/* Navigation */}

      <Navbar />


      {/* Routes */}

      <Routes>

        {/* Normal Routes */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* Parent Route */}

        <Route
          path="/students"
          element={<Students />}
        >

          {/* Child Route */}

          <Route
            index
            element={<AllStudents />}
          />


          {/* Child Route */}

          <Route
            path="add"
            element={<AddStudent />}
          />


          {/* Child Route */}

          <Route
            path="details"
            element={<StudentDetails />}
          />

        </Route>


        {/* 404 Route */}

        <Route
          path="*"
          element={<PageNotFound />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;