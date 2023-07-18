import React from 'react'
import EmployeeListItem from './EmployeeListItem'
import personnel from '../model/employeeList'
// ??? useContext attempt
import { useContext } from 'react'

function EmployeeList(props) {
  return (
    <div id='employeeList'>

        {/* useContext attempt */}
        let {}

      <p>EMPLOYEE LIST HERE</p>

      <EmployeeListItem  info={personnel}/>
    </div>
  )
}

export default EmployeeList
