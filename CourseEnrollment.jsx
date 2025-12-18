import { useState } from "react";

export default function CourseEnrollment() {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [enrollments, setEnrollments] = useState([]);

  const enrollCourse = () => {
    if (studentName.trim() === "" || course.trim() === "") return;

    setEnrollments([
      ...enrollments,
      { name: studentName, course: course }
    ]);

    setStudentName("");
    setCourse("");
  };

  const removeEnrollment = (index) => {
    setEnrollments(enrollments.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[420px]">
        <h1 className="text-2xl font-bold text-center text-purple-600 mb-4">
          🎓 Course Enrollment Form
        </h1>

        {/* Enrollment Form */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full border-2 border-purple-300 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
          />

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full border-2 border-pink-300 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-500"
          >
            <option value="">Select Course</option>
            <option>Web Development</option>
            <option>Data Science</option>
            <option>Machine Learning</option>
            <option>Mobile App Development</option>
          </select>

          <button
            onClick={enrollCourse}
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 rounded-lg font-semibold hover:opacity-90"
          >
            Enroll Now
          </button>
        </div>

        {/* Enrolled Courses List */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            📋 Enrolled Students
          </h2>

          {enrollments.length === 0 && (
            <p className="text-sm text-gray-500">No enrollments yet</p>
          )}

          <ul className="space-y-2">
            {enrollments.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gradient-to-r from-yellow-100 to-pink-100 px-3 py-2 rounded-lg"
              >
                <span className="text-sm font-medium">
                  {item.name} — <span className="text-purple-600">{item.course}</span>
                </span>
                <button
                  onClick={() => removeEnrollment(index)}
                  className="text-red-500 text-sm font-semibold"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
