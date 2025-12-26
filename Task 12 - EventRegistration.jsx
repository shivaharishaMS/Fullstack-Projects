import { useState } from "react";

export default function Event() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [registrations, setRegistrations] = useState([]);

  const registerEvent = () => {
    if (!name || !email || !event) {
      alert("⚠️ Please fill in all fields before registering.");
      return;
    }

    const newRegistration = { name, email, event };
    setRegistrations([...registrations, newRegistration]);

    alert(
      `✅ Registration Confirmed!\n\nName: ${name}\nEvent: ${event}`
    );

    setName("");
    setEmail("");
    setEvent("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[450px]">
        <h1 className="text-2xl font-bold text-center text-purple-700 mb-4">
          🎉 Event Registration
        </h1>

        {/* Registration Form */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-2 border-purple-300 rounded-lg px-3 py-2"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-blue-300 rounded-lg px-3 py-2"
          />

          <select
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            className="w-full border-2 border-pink-300 rounded-lg px-3 py-2"
          >
            <option value="">Select Event</option>
            <option>Tech Conference 2025</option>
            <option>AI Workshop</option>
            <option>Startup Meetup</option>
            <option>Hackathon</option>
          </select>

          <button
            onClick={registerEvent}
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 rounded-lg font-semibold hover:opacity-90"
          >
            Register Now
          </button>
        </div>

        {/* Registered List */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            📋 Registered Participants
          </h2>

          {registrations.length === 0 && (
            <p className="text-sm text-gray-500">No registrations yet</p>
          )}

          <ul className="space-y-2">
            {registrations.map((r, index) => (
              <li
                key={index}
                className="bg-gradient-to-r from-yellow-100 to-pink-100 px-3 py-2 rounded-lg text-sm"
              >
                <strong>{r.name}</strong> — {r.event}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
