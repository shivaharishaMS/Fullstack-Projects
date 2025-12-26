import { useState } from "react";

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("students");

  const students = [
    { id: 1, name: "Alice", age: 20, grade: "A" },
    { id: 2, name: "Bob", age: 21, grade: "B" },
    { id: 3, name: "Charlie", age: 19, grade: "A" },
  ];

  const courses = [
    { id: 1, title: "Mathematics", instructor: "Dr. Smith" },
    { id: 2, title: "Physics", instructor: "Prof. John" },
    { id: 3, title: "Computer Science", instructor: "Ms. Alice" },
  ];

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h2>🎓 Student Management Dashboard</h2>

        {/* Navigation Tabs */}
        <div style={styles.nav}>
          <button
            style={activeTab === "students" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("students")}
          >
            Students
          </button>
          <button
            style={activeTab === "courses" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("courses")}
          >
            Courses
          </button>
        </div>

        {/* Data Display */}
        <div style={styles.dataDisplay}>
          {activeTab === "students" && (
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
          )}

          {activeTab === "courses" && (
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
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
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
    marginBottom: "20px",
  },
  tab: {
    flex: 1,
    padding: "10px",
    cursor: "pointer",
    border: "1px solid #ccc",
    borderRadius: "8px 8px 0 0",
    background: "#f0f0f0",
  },
  activeTab: {
    flex: 1,
    padding: "10px",
    cursor: "pointer",
    border: "1px solid #ccc",
    borderBottom: "none",
    borderRadius: "8px 8px 0 0",
    background: "#fff",
    fontWeight: "bold",
  },
  dataDisplay: {
    padding: "10px",
    background: "#f9f9f9",
    borderRadius: "0 0 8px 8px",
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

export default StudentDashboard;
