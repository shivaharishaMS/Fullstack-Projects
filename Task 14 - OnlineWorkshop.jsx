import { useState } from "react";

function OnlineWorkshop() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h2 style={styles.title}>🎓 Online Workshop Registration</h2>

        <div style={styles.layout}>
          {/* Registration Form */}
          <div style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              style={styles.input}
            />

            <select
              name="workshop"
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select Workshop</option>
              <option value="React Basics">React Basics</option>
              <option value="AI Fundamentals">AI Fundamentals</option>
              <option value="Web Development">Web Development</option>
            </select>
          </div>

          {/* Live Preview */}
          <div style={styles.preview}>
            <h3>📋 Live Preview</h3>
            <p><strong>Name:</strong> {formData.name || "—"}</p>
            <p><strong>Email:</strong> {formData.email || "—"}</p>
            <p><strong>Workshop:</strong> {formData.workshop || "—"}</p>
          </div>
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
    alignItems: "center",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    background: "#ffffff",
    padding: "30px",
    width: "650px",
    borderRadius: "15px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  layout: {
    display: "flex",
    gap: "20px",
  },
  form: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  preview: {
    flex: 1,
    background: "#f4f8ff",
    padding: "15px",
    borderRadius: "10px",
  },
};

export default OnlineWorkshop;
