import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h2>Fetch User Data</h2>
      <button onClick={() => console.log('hi')}>
        Fetch Data
      </button>
      <button>Load Data</button>

    </div>
  );
}
