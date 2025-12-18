import { useState } from "react";

export default function Attendance() {
  const initialStudents = [
    { name: "Alice", status: "Absent" },
    { name: "Bob", status: "Absent" },
    { name: "Charlie", status: "Absent" },
    { name: "David", status: "Absent" },
    { name: "Emma", status: "Absent" }
  ];

  const [students, setStudents] = useState(initialStudents);

  const markPresent = (index) => {
    const updated = [...students];
    updated[index].status = "Present";
    setStudents(updated);
  };

  const markAbsent = (index) => {
    const updated = [...students];
    updated[index].status = "Absent";
    setStudents(updated);
  };

  const presentCount = students.filter(s => s.status === "Present").length;
  const absentCount = students.length - presentCount;

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f4f6f8;
        }

        .container {
          max-width: 700px;
          margin: 40px auto;
          padding: 20px;
        }

        .tracker {
          background: #ffffff;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .summary {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          font-weight: bold;
        }

        .student {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }

        .student:last-child {
          border-bottom: none;
        }

        .status {
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 13px;
          color: white;
        }

        .Present {
          background: #4caf50;
        }

        .Absent {
          background: #f44336;
        }

        .buttons button {
          margin-left: 5px;
          padding: 5px 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 13px;
        }

        .present-btn {
          background: #4caf50;
          color: white;
        }

        .absent-btn {
          background: #f44336;
          color: white;
        }
      `}</style>

      <div className="container">
        <div className="tracker">
          <h2>Class Attendance</h2>

          <div className="summary">
            <div>Present: {presentCount}</div>
            <div>Absent: {absentCount}</div>
          </div>

          {students.map((student, index) => (
            <div className="student" key={index}>
              <div>{student.name}</div>

              <div className="buttons">
                <span className={`status ${student.status}`}>
                  {student.status}
                </span>
                <button
                  className="present-btn"
                  onClick={() => markPresent(index)}
                >
                  Present
                </button>
                <button
                  className="absent-btn"
                  onClick={() => markAbsent(index)}
                >
                  Absent
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
