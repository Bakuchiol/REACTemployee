import React from 'react'

import { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

function EmployeeListItem(props) {

    // context
    let {setPerson} = useContext(AppContext)

  return (
    <div id='employeeListItem'
        onClick={() => {
            setPerson(props.worker);
        }}
    >
    <div className='listWrapper'>
        <img src={props.worker.img} alt="profile" className='pic'/>
        <div className='listImg'>
            <p>{props.worker.name}</p>
            <p>{props.worker.title}</p>
        </div>
    </div>
      {/* console.log({person.name}) */}
    </div>
  )
}

export default EmployeeListItem
