import { useState } from "react";

function NotificationDashboard() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type) => {
    const messages = {
      success: "✅ Data saved successfully",
      warning: "⚠️ Storage almost full",
      error: "❌ Server connection failed",
    };

    setNotifications([
      ...notifications,
      {
        id: Date.now(),
        type,
        message: messages[type],
      },
    ]);
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h2>📊 Dashboard Notifications</h2>

        <div style={styles.buttons}>
          <button
            style={{ ...styles.button, background: "#4caf50" }}
            onClick={() => addNotification("success")}
          >
            Add Success
          </button>

          <button
            style={{ ...styles.button, background: "#ff9800" }}
            onClick={() => addNotification("warning")}
          >
            Add Warning
          </button>

          <button
            style={{ ...styles.button, background: "#f44336" }}
            onClick={() => addNotification("error")}
          >
            Add Error
          </button>
        </div>

        {/* Notification List */}
        <div style={styles.list}>
          {notifications.length === 0 && (
            <p>No notifications available</p>
          )}

          {notifications.map((note) => (
            <div
              key={note.id}
              style={{
                ...styles.notification,
                borderLeft: `6px solid ${
                  note.type === "success"
                    ? "#4caf50"
                    : note.type === "warning"
                    ? "#ff9800"
                    : "#f44336"
                }`,
              }}
            >
              <span>{note.message}</span>
              <button
                style={styles.close}
                onClick={() => removeNotification(note.id)}
              >
                ✖
              </button>
            </div>
          ))}
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
    background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    background: "#ffffff",
    padding: "30px",
    width: "450px",
    borderRadius: "15px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  button: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    width: "30%",
  },
  list: {
    textAlign: "left",
  },
  notification: {
    background: "#f9f9f9",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  close: {
    background: "transparent",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default NotificationDashboard;
