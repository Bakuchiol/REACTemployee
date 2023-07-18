import './App.css';
import EmployeePage from './components/EmployeePage';
import Homepage from './components/Homepage';
import employeeList from './model/employeeList'

function App() {
  return (
    <div className="App">
      <Homepage />
      <EmployeePage />
    </div>
  );
}

export default App;
