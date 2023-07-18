import { useState, createContext } from "react";
import employeeList from '../model/employeeList'
import personnel from "../model/employeeList";

export const WorkerContext = createContext();

function EmployeeContextProvider(props){
    const [person, setWorker] = useState(personnel[0]);
    const [ employee, setEmployee] = useState(personnel);
    
}