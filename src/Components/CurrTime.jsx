import React, { useState } from 'react'
import Clock from './Clock';

const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=319de7333d6f77f7ea98d69dbc188698`;

const CurrTime = () => {
  return (
    <div className='section'>
      <Clock />
    </div>
  )
}

export default CurrTime;