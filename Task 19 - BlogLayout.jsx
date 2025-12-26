import { useState } from "react";

function BlogLayout() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h2>📝 My Tech Blog</h2>

        {/* Blog Content */}
        <div style={styles.blog}>
          <h3>Understanding React State</h3>
          <p>
            React state allows components to create dynamic and interactive
            user interfaces. Whenever state changes, the UI updates
            automatically without reloading the page.
          </p>
        </div>

        {/* Comment Section */}
        <div style={styles.commentsSection}>
          <h4>💬 Comments</h4>

          <form onSubmit={addComment} style={styles.form}>
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={styles.input}
            />
            <button style={styles.button}>Post</button>
          </form>

          <div style={styles.commentList}>
            {comments.length === 0 && <p>No comments yet</p>}
            {comments.map((c, index) => (
              <div key={index} style={styles.comment}>
                {c}
              </div>
            ))}
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
    background: "linear-gradient(135deg, #8360c3, #2ebf91)",
    fontFamily: "Arial, sans-serif",
    padding: "15px",
  },
  container: {
    background: "#ffffff",
    maxWidth: "700px",
    width: "100%",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  },
  blog: {
    marginBottom: "25px",
  },
  commentsSection: {
    marginTop: "10px",
  },
  form: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  input: {
    flex: "1",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    minWidth: "200px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    background: "#2ebf91",
    color: "#fff",
    cursor: "pointer",
  },
  commentList: {
    marginTop: "15px",
  },
  comment: {
    background: "#f4f4f4",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "8px",
  },
};

export default BlogLayout;
