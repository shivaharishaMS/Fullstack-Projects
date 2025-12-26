import { useState } from "react";

function StudentFeedback() {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || !comment) {
      setError("⚠️ Please provide rating and comment");
      return;
    }

    setFeedbacks([
      ...feedbacks,
      { rating, comment }
    ]);

    setRating("");
    setComment("");
    setError("");
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h2>📝 Student Feedback</h2>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={styles.input}
          >
            <option value="">Select Rating</option>
            <option value="⭐">⭐</option>
            <option value="⭐⭐">⭐⭐</option>
            <option value="⭐⭐⭐">⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
          </select>

          <textarea
            placeholder="Write your comments..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={styles.textarea}
          />

          <button style={styles.button}>Submit Feedback</button>
        </form>

        {/* Feedback Display */}
        <div style={styles.list}>
          <h3>📢 Feedback Received</h3>
          {feedbacks.length === 0 && <p>No feedback yet</p>}

          {feedbacks.map((fb, index) => (
            <div key={index} style={styles.feedback}>
              <p><strong>Rating:</strong> {fb.rating}</p>
              <p><strong>Comment:</strong> {fb.comment}</p>
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
    background: "linear-gradient(135deg, #f6d365, #fda085)",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    background: "#fff",
    padding: "30px",
    width: "420px",
    borderRadius: "15px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    minHeight: "80px",
  },
  button: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#fda085",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    background: "#ffe6e6",
    color: "#d8000c",
    padding: "8px",
    borderRadius: "8px",
  },
  list: {
    marginTop: "20px",
    textAlign: "left",
  },
  feedback: {
    background: "#f9f9f9",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
};

export default StudentFeedback;
