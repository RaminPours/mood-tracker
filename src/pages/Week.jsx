import { useState, useEffect } from "react";

export default function Week() {
  const [moods, setMoods] = useState({});


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("moods"));
    if (saved) {
      setMoods(saved);
    }
  }, []);

 
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return d.toISOString().split("T")[0];
  });


  return (
    <div>
      <h1 style={{ fontSize: "50px" }}>Week's Mood</h1>
      <p style={{ fontSize: "35px" }}>
        This page will show the mood for the week.
      </p>
      <div className="mood-container  ">
        {last7Days.map((day) => (
          <div key={day} className="mood-item">
            <h2>{day}</h2>
            <p>{moods[day]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
