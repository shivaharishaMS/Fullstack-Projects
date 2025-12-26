import { useState } from "react";

function AuthSystem() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  // Dummy credentials
  const VALID_USER = "admin";
  const VALID_PASS = "12345";

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("⚠️ All fields are required");
      return;
    }

    if (username === VALID_USER && password === VALID_PASS) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("❌ Invalid username or password");
    }
  };

  if (isLoggedIn) {
    return (
      <div style={styles.app}>
        <div style={styles.container}>
          <h2>✅ Login Successful</h2>
          <p>Welcome, {username}!</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h2>🔐 Authentication</h2>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button style={styles.button}>Login</button>
        </form>
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
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "10px",
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
    background: "#185a9d",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    background: "#ffe6e6",
    color: "#d8000c",
    padding: "8px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
};

export default AuthSystem;
