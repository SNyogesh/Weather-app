import React, { useState } from 'react'
import searchIcon from '../Assets/search.png'

// images//

import clear from '../Assets/clear.png'
import cloud from '../Assets/cloud.png'
import drizzle from '../Assets/drizzle.png'
import rain from '../Assets/rain.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'
import humidity from '../Assets/humidity.png'

// -------------!!!!!!!!!!!!!!!---------------------- //


export default function Display() {
  
    const [Text,setText] = useState("");
    const [Location,setLocation] = useState("london");
    const [Climate,setClimate] = useState("Clear");
    const [Temp,setTemp] = useState("24");
    const [Humidity,setHumidity] = useState("20");
    const [WindSpeed,setWindSpeed] = useState("16");
    const [Img,setImg] = useState(clear);

  const search = async ()=>{
    const apiKey = "21d323beaa1e62d93a65d6a0f559ad3c";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${Text}&units=metric&appid=${apiKey}`;
    

    const res = await fetch(url);
    const data = await res.json();


    setLocation(data.name);
    setClimate(data.weather[0].main);
    setTemp(Math.floor(data.main.temp));
    setHumidity(data.main.humidity);
    setWindSpeed(Math.floor(data.wind.speed));
    setText(" ");
    
    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
      setImg(clear);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
      setImg(cloud);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
      setImg(drizzle);
    }
    else if(data.weather[0].icon==="04d" ||data.weather[0].icon==="04n"){
      setImg(drizzle);
    }
    else if(data.weather[0].icon==="09d" ||data.weather[0].icon==="09n"){
      setImg(rain);
    }
    else if(data.weather[0].icon==="10d" ||data.weather[0].icon==="10n"){
      setImg(rain);
    }
    else if(data.weather[0].icon==="13d" ||data.weather[0].icon==="13n"){
      setImg(snow);
    }
    else{
      setImg(clear);
    }

  }
  return (
    <section className="wrapper">
      <div className="container">
        <div className="header">
          <div className="inputField">
            <input type='text' className='inputText' placeholder='Enter city name' onChange={(e)=> setText(e.target.value)} value={Text} required />
          </div>
          <div className="search">
            <button type='button' className='searchBtn' onClick={()=>search()}><img src={searchIcon} /></button>
            
          </div>
        </div>
        <div className="main">
          <img src={Img} alt="" className="imgDisplay" />
          <h5 className="climate">{Climate}</h5>
          <h1 className="temp">{Temp}<sup className="sup">º</sup><span className="unit">C</span></h1>
          
          <h2 className="location">{Location}</h2>
        </div>  
        <div className="footer">
          <div className="fields">
            <span className="img"><img src={humidity}/></span>
            <div className="units">
              <h5 className="value">{Humidity}<span className="metrics">%</span> </h5>
              <h6 className="label">Humidity</h6>
            </div>
           
          </div>
          <div className="fields">
            <span className="img"><img src={wind}/></span>
            <div className="units">
              <h5 className="value">{WindSpeed} <span className="metrics">km/hr</span></h5>
              <h6 className="label">Windspeed</h6>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  
  )
}