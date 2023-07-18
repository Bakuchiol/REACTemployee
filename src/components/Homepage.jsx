import React from 'react'
import EmployeeList from './EmployeeList'
import SearchBar from './SearchBar'

function Homepage() {
  return (
    <div id='homePage'>
      <p>Employee Directory</p>
      <SearchBar />
      <EmployeeList />
    </div>
  )
}

export default Homepage
