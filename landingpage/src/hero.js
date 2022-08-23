
export default function Hero() {
  const myStyle = {
    display:"flex",
    flexDirection: "column",
    alignItems:"center",
    justifyContent:"center",
    background:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('https://assets.codepen.io/6060109/agency-hero-image.png')",
    width: "100vw",
    height:"500px",
    color:"white"
  }
  
  return (
    <div className='hero-container' style={myStyle}>
          <ul className="navbar">
            <li><a href='www.bleasdale.dev'>Home</a></li>
            <li><a href='www.bleasdale.dev'>Our Services</a></li>
            <li><a href='www.bleasdale.dev'>Subscribe</a></li>
          </ul>
        <div className="hero-header">
          <h2>WE DO WEBSITES RIGHT</h2>
        </div>
    </div>
  )
    
}