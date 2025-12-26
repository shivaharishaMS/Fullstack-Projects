import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function StudentRouterDashboard() {
  const [students] = useState([
    { id: 1, name: "Alice", age: 20, grade: "A" },
    { id: 2, name: "Bob", age: 21, grade: "B" },
    { id: 3, name: "Charlie", age: 19, grade: "A" },
  ]);

  const [courses] = useState([
    { id: 1, title: "Mathematics", instructor: "Dr. Smith" },
    { id: 2, title: "Physics", instructor: "Prof. John" },
    { id: 3, title: "Computer Science", instructor: "Ms. Alice" },
  ]);

  return (
    <Router>
      <div style={styles.app}>
        <div style={styles.container}>
          <h2>🎓 Student Dashboard</h2>

          {/* Navigation */}
          <nav style={styles.nav}>
            <Link style={styles.link} to="/students">Students</Link>
            <Link style={styles.link} to="/courses">Courses</Link>
          </nav>

          <div style={styles.content}>
            <Routes>
              <Route path="/" element={<Navigate to="/students" />} />
              
              <Route
                path="/students"
                element={
                  <table style={styles.table}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((s) => (
                        <tr key={s.id}>
                          <td>{s.name}</td>
                          <td>{s.age}</td>
                          <td>{s.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                }
              />

              <Route
                path="/courses"
                element={
                  <table style={styles.table}>
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Instructor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((c) => (
                        <tr key={c.id}>
                          <td>{c.title}</td>
                          <td>{c.instructor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    fontFamily: "Arial, sans-serif",
    padding: "30px 0",
  },
  container: {
    background: "#fff",
    width: "700px",
    borderRadius: "15px",
    padding: "25px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  },
  nav: {
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    background: "#f0f0f0",
    color: "#333",
    fontWeight: "bold",
  },
  content: {
    background: "#f9f9f9",
    padding: "15px",
    borderRadius: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  "table th, table td": {
    border: "1px solid #ccc",
    padding: "8px",
    textAlign: "left",
  },
};

export default StudentRouterDashboard;
