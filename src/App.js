import './App.css';
// import { useState } from 'react';
import EmployeePage from './components/EmployeePage';
import Homepage from './components/Homepage';
// import employeeList from './model/employeeList'

function App() {

  // const [person, setPerson] = useState(employeeList)

  return (
    <div className="App">
      <Homepage />
      <EmployeePage />
      {/* <img src='./images/p1.png'></img> */}
    </div>
  );
}

export default App;
