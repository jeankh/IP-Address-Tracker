import React from 'react'
import './location.css'

function Location(props) {
  return (
    <div className='location'>
        <ul>
          <li>
            <h2>IP ADDRESS</h2>
            <h1>{props.ipAddress}</h1>
          </li>
          <li>
            <h2>Location</h2>
            <h1>{props.location}</h1>
          </li>
          <li>
            <h2>TIMEZONE</h2>
            <h1>{props.timezone}</h1>
          </li>
          <li>
            <h2>ISP</h2>
            <h1>{props.isp}</h1>
          </li>
        </ul>
    </div>
  );
}


export default Location