// import React, { useContext } from 'react'
import Header from './Header'
// import EmployeeList from './EmployeeList'
// import EmployeeListItem from './EmployeeListItem'
import { useContext } from 'react';
import { AppContext } from '../contexts/app_context'

function EmployeePage() {

    let {person} = useContext(AppContext);

  return (
    <div id='employeePage'>
      {/* <h1>EMPLOYEE PAGE</h1> */}
      <Header />
      {/* employee card top */}
      <div className='employeeCard'>
        <img src={person.img} alt="" className='cardImg'/>
        <div className='employeeCardTxt'>
            <p>{person.name}EMPLOYEE NAME</p>
            <p>{person.title}EMPLOYEE ROLE</p>
        </div>
      </div>

      {/* <EmployeeList /> */}

    {/* contact info */}
    <div className='contactInfo'>
        <h4>Call Office</h4>
        <p>{person.office}CONTACT INFO</p>
    </div>
    <div className='contactInfo'>
        <h4>Call Mobile</h4>
        <p>{person.mobile}CONTACT INFO</p>
    </div>
    <div className='contactInfo'>
        <h4>SMS</h4>
        <p>{person.sms}CONTACT INFO</p>
    </div>
    <div className='contactInfo'>
        <h4>Email</h4>
        <p>{person.email}CONTACT INFO</p>
    </div>

    </div>
  )
}

export default EmployeePage
