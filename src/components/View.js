import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    var [viewlist,setViewlist]=useState([])
    var[loadstatus,setLoadstatus]=useState(true)
    axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
        (response)=>{
            console.log(response.data)
            setViewlist(response.data)
            setLoadstatus(false)
        }
    )
    
  return (
    <div>
        <Navbar/>
         <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            
            
  
    {loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> : <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Duration</th>
      <th scope="col">Venue</th>
      <th scope="col">Date</th>
     
    </tr>
  </thead>
   
    <tbody>
    {viewlist.map((value,key)=>{
                    return  <tr>
      <th scope="row">{value.courseTitle}</th>
      <td>{value.courseDescription}</td>
      <td>{value.courseDuration}</td>
      <td>{value.courseVenue}</td>
      <td>{value.courseDate}</td>
    </tr>
    
 
                   
                    
                })}
                 </tbody>
  </table>
}
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default View