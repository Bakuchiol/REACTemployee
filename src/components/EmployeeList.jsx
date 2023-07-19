import React from 'react'
import EmployeeListItem from './EmployeeListItem'
import employeeList from '../model/employeeList'

import { useState } from 'react'
// ??? useContext attempt
import { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

function EmployeeList() {
    const [people, setPeople] = useState(employeeList)
    let {employees} = useContext(AppContext)

    console.log(employees)

  return (
    <div id='employeeList'>
        {/* <p>**EMPLOYEE LIST HERE**</p> */}
        {/* {people[0].name} */}

        {/* {people.map((p, i)=>{ */}
        {/* {employees.map((p, i) => {
            console.log(p)
            return (
                <EmployeeListItem key={i} worker={p} />    
            )
        })} */}


      {/* <EmployeeListItem  info={employeeList}/> */}
    </div>
  )
}

export default EmployeeList
