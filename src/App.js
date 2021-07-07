import React, {useState} from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Table from "./components/Table/Table"
import { Context } from "./components/Context/Context"

function App() {
  const [employees, setEmployees] = useState([]);
  const [displayedEmployees, setDisplayedEmployees] = useState([])

  return (
    <div className="App">
      <Context.Provider value={{employees, setEmployees, displayedEmployees, setDisplayedEmployees}}>
        <Navbar />
        <Table />
      </Context.Provider>
    </div>
  );
}

export default App;