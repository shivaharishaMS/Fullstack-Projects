import { useState } from "react";

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [form, setForm] = useState({
    name: "",
    message: "",
    rating: "5"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;

    setFeedbacks([...feedbacks, form]);
    setForm({ name: "", message: "", rating: "5" });
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f4f6f8;
        }

        .container {
          max-width: 900px;
          margin: 40px auto;
          padding: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .form-box, .list-box {
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        h2 {
          margin-bottom: 15px;
        }

        input, textarea, select {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        textarea {
          resize: none;
          height: 100px;
        }

        button {
          width: 100%;
          padding: 10px;
          border: none;
          background: #2196f3;
          color: white;
          font-size: 15px;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background: #1976d2;
        }

        .feedback {
          border-bottom: 1px solid #eee;
          padding: 12px 0;
        }

        .feedback:last-child {
          border-bottom: none;
        }

        .name {
          font-weight: bold;
        }

        .rating {
          color: #ff9800;
          margin-left: 8px;
        }

        .message {
          margin-top: 5px;
          color: #555;
        }

        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        {/* Feedback Form */}
        <div className="form-box">
          <h2>Feedback Form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Feedback"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
            >
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="2">⭐⭐</option>
              <option value="1">⭐</option>
            </select>

            <button type="submit">Submit Feedback</button>
          </form>
        </div>

        {/* Feedback Display */}
        <div className="list-box">
          <h2>Submitted Feedback</h2>

          {feedbacks.length === 0 ? (
            <p>No feedback submitted yet.</p>
          ) : (
            feedbacks.map((fb, index) => (
              <div className="feedback" key={index}>
                <div>
                  <span className="name">{fb.name}</span>
                  <span className="rating">
                    {"⭐".repeat(fb.rating)}
                  </span>
                </div>
                <div className="message">{fb.message}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
