import React, { useState } from 'react'
import Navbar from './Navbar'

const Addcourse = () => {
    var [title,setTitle]=useState("")
    var [duration,setDuration]=useState("")
    var [dis,setDis]=useState("")
    var [ven,setVen]=useState("")
    var [date,setDate]=useState("")
    
  
    const subData=()=>{
        const data={"title":title,"duration":duration,"dis":dis,"ven":ven,"date":date}
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
         <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label  for="" className="form-label">Course Title</label>
                    <input  onChange={(e)=>{setTitle(e.target.value)}} className="form-control" placeholder="" type="text"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Duration</label>
                    <input  onChange={(e)=>{setDuration(e.target.value)}} className="form-control" placeholder="" type="text"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Discription</label>
                    <input  onChange={(e)=>{setDis(e.target.value)}} className="form-control" placeholder="" type="text"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Venue</label>
                    <input  onChange={(e)=>{setVen(e.target.value)}} className="form-control" placeholder="" type="text"/>
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Date</label>
                    <input  onChange={(e)=>{setDate(e.target.value)}} className="form-control" placeholder="" type="date"/>
                </div>
                
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData}  className="btn btn-primary">Register</button>
                </div>
               
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Addcourse