import { useState } from "react"

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=319de7333d6f77f7ea98d69dbc188698`)
        .then(res => res.json())
        .then(data => setData(data));
      setLocation('');
    }
  }
  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
        />
      </div>

      <div className="container">
        <h1 className="location">{data.name}</h1>
        <div className="description">
          {data.main ? <h1 className="temp">{data.main.temp.toFixed()}°F</h1> : null}
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>}
          
      </div>
    </div>
  )
}

export default App
