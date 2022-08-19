import React, { useReducer, useState } from 'react'

export default function Whether() {
    const[location,setLocation]=useState();
    const[loading,setLoading]=useState(false);
    const[data,setData]=useState(null);

    
    const weatherHandle =(e)=>{
        setLocation(e.target.value);
    }

    const outputHandle=()=>{
        setLoading(true)
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=df8805b218019cc28ee719f8c0d9667e`;
        fetch(url)
        .then((res)=>res.json())
        .then((response)=>{
            setLoading(false);
            setData(response);
            console.log("Response is",response);
        })
    };

    if(loading){
        return<h1>Loading your responce</h1>
    } 

  return (
    <>
    <div className='container p-5 my-5 bg-dark text-white'>
    <form>
  <div class="mb-2">
    <label className="form-label">City Name</label>
    <input type="text" placeholder='Type city here' className="form-control" onChange={weatherHandle} value={location} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">It shows todays wheather update</div>
    <button type="submit" onClick={outputHandle} className="btn btn-primary">Submit</button>
  </div>
  {data?(
        <>
        <h1>Todays update for {location}</h1>
        <div>Temp {data.main.temp}Kel</div>
        <div>Wind Speed {data.wind.speed}km/hr</div>
        </>):null
        }
  </form>
     
      
        </div>
    </>
  )
}
