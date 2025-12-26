import { useState } from "react";

function LoginRole() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [loggedInRole, setLoggedInRole] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && role) {
      setLoggedInRole(role);
    }
  };

  // Role-based redirection (conditional rendering)
  if (loggedInRole === "Admin") {
    return <Dashboard title="Admin Dashboard" color="#ff6b6b" />;
  }

  if (loggedInRole === "User") {
    return <Dashboard title="User Dashboard" color="#4facfe" />;
  }

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h2 style={styles.title}>🔐 Login</h2>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.input}
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>

          <button style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

function Dashboard({ title, color }) {
  return (
    <div
      style={{
        ...styles.app,
        background: color,
      }}
    >
      <div style={styles.container}>
        <h2>{title}</h2>
        <p>Welcome! You have been redirected based on your role.</p>
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
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    background: "#ffffff",
    padding: "30px",
    width: "350px",
    borderRadius: "15px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#667eea",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default LoginRole;
