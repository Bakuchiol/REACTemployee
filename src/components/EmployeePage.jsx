import React from 'react'
import Header from './Header'

function EmployeePage() {
  return (
    <div id='employeePage'>
      {/* <h1>EMPLOYEE PAGE</h1> */}
      <Header />
      {/* employee card top */}
      <div className='employeeCard'>
        <img src="https://cdn2.iconfinder.com/data/icons/office-and-business-special-set-1/260/19-512.png" alt="" className='cardImg'/>
        <div className='employeeCardTxt'>
            <p>{}EMPLOYEE NAME</p>
            <p>{}EMPLOYEE ROLE</p>
        </div>
      </div>

    {/* contact info */}
    <div className='contactInfo'>
        <h4>Call Office</h4>
        <p>{}CONTACT INFO</p>
    </div>
    <div className='contactInfo'>
        <h4>Call Office</h4>
        <p>{}CONTACT INFO</p>
    </div>
    <div className='contactInfo'>
        <h4>Call Office</h4>
        <p>{}CONTACT INFO</p>
    </div>
    <div className='contactInfo'>
        <h4>Call Office</h4>
        <p>{}CONTACT INFO</p>
    </div>

    </div>
  )
}

export default EmployeePage
