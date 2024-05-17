import React from 'react'
import './pagestyles.css'
import mapImage from "./resources/map.jpg";


const Location = () => {

    return(
        <div align='center'>
            <div>
            <br/>
            <h1>Location</h1>
            <br/>
            <div>
            <div className='loc'>15 Mabini St. Don Domingo Maddela, Bayombong, Philippines, 3700 </div>  <br/>         
            <br/><img src={mapImage} alt="map.jpg" style={{ width: "50%", height: "auto" }}/>
            </div>
            </div>
        </div>

    )
}

export default Location