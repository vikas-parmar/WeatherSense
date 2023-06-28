import Clock from './Clock';

const temp = {
  fontSize: "6rem",
  fontFamily: "'Times New Roman', Times, serif",
  fontWeight: 900,
  textAlign: "right"
}
const CurrTime = ({ data }) => {
  return (
    <>
      {
        data.main ? (
          <div className='box'>
            <div style={{ textAlign: "right" }}>
              <h1>{data.name}, {data.sys.country}</h1>
              <span style={temp} >
                {Math.round(data.main.temp)}°F
              </span>
            </div>
            <div>
              <Clock />
            </div>
          </div>) : null
      }
    </>
  )
}

export default CurrTime;