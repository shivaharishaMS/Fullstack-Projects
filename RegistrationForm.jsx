import React, { useState } from "react";

export default function RegistrationForm() {
  const [mode, setMode] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    travellers: "",
    destination: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
    setFormData({
      fullName: "",
      email: "",
      travellers: "",
      destination: "",
    });
    setMode("");
  };

  return (
<div
  style={{
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",   // <-- add this

    backgroundImage: `url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255,255,255,0.9)",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        {/* Initial Buttons */}
        {!mode && (
          <>
            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#003366",
              }}
            >
              Travel Registration
            </h2>

            <button style={buttonStyle} onClick={() => setMode("solo")}>
              Solo Traveler
            </button>

            <button
              style={{ ...buttonStyle, background: "#28a745" }}
              onClick={() => setMode("group")}
            >
              Group Traveler
            </button>
          </>
        )}

        {/* Form Mode */}
        {mode && (
          <>
            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#002244",
              }}
            >
              {mode === "solo"
                ? "Solo Travel Registration"
                : "Group Travel Registration"}
            </h2>

            <form onSubmit={handleSubmit}>
              <label style={labelStyle}>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleChange}
                style={inputStyle}
                required
              />

              <label style={labelStyle}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />

              {mode === "group" && (
                <>
                  <label style={labelStyle}>Number of Travellers</label>
                  <input
                    type="number"
                    name="travellers"
                    placeholder="Enter number of people"
                    value={formData.travellers}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                  />
                </>
              )}

              <label style={labelStyle}>Destination</label>
              <input
                type="text"
                name="destination"
                placeholder="Where do you want to go?"
                value={formData.destination}
                onChange={handleChange}
                style={inputStyle}
                required
              />

              <button type="submit" style={submitStyle}>
                Register
              </button>

              <button
                type="button"
                onClick={() => setMode("")}
                style={backStyle}
              >
                Back
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ---------- Styling ----------
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  outline: "none",
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#007bff",
  color: "white",
  border: "none",
  marginBottom: "12px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
};

const submitStyle = {
  width: "100%",
  padding: "12px",
  background: "#ff6600",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px",
  fontSize: "16px",
};

const backStyle = {
  width: "100%",
  padding: "10px",
  background: "#444",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px",
  fontSize: "15px",
};

const labelStyle = {
  fontWeight: "bold",
  marginBottom: "5px",
  display: "block",
};
