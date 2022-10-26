import React, { useState } from "react";
import "./style.css";
// import axios from 'axios'

export default function App() {
  /*
  create state variables for users, setUsers
  create a function that fetches the data on click
  */
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const apiUrl = 'https://randomuser.me/api/?results=10'
    
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      console.log(data)
      setUsers(data.results)
    } catch (err) {
      console.log(err)
    }
  }
  console.table(users)

  return (
    <div>
      <h2>Fetch User Data</h2>
      <button onClick={() => fetchUsers()}>
        Fetch Data
      </button>
      <button>Load Data</button>

    </div>
  );
}
