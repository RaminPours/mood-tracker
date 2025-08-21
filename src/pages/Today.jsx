import { useState, useEffect } from "react";


export default function Today() {
  const [moods, setMoods] = useState({});
  const todayDate = new Date().toISOString().split("T")[0];
  

  const emojis = [
    "Happy!😊",
    "Sad!😞",
    "Angry!😡",
    "Super!🤩",
    "Working hard!🤑",
    "Sleepy!😴",
    "Crying!😭",
    "Feeling sick🤢",
  ];

  

useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("moods"));
  if (saved) {
    setMoods(saved);
  }
}, []);


useEffect(() => {
  localStorage.setItem("moods", JSON.stringify(moods));
}, [moods]);


const deleteItems = () => {
    localStorage.removeItem("moods");
};


return (
    <div>
      <h1 style={{ fontSize: "50px" }}>Today's Mood</h1>

      <p style={{ fontSize: "35px" }}>Current Mood: {moods[todayDate] || "Select a mood!"}</p>
        
         
     
      <p style={{ color: "gray", fontSize: "20px" }}>Today is: {todayDate}</p>
      
      
      {emojis.map((emoji, index) => (
        <>
          <button
            key={index}
            value={emoji}
            style={{
              fontSize: "2rem",
              margin: "15px",
              cursor: "pointer",
              backgroundColor: "lightblue",
              border: "1px solid black",
              borderRadius: "50px",
              padding: "10px 20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => setMoods({ ...moods, [todayDate]: emoji })}
          >
            {emoji}
          </button>
          
          <hr />
        </>
      ))}
      <button onClick={deleteItems}
      style={{
        fontSize: "1.5rem",
        margin: "15px",
        cursor: "pointer",
        backgroundColor: "red",
        color: "white",
        border: "1px solid black",
        borderRadius: "50px",
        padding: "10px 20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}>Delete Mood</button>
    </div>
  );
}
