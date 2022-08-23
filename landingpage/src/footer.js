

const Footer = () => {
  return (
    <div style={{
      background: "#133588",
      color:"white",
      display:"flex",
      flexDirection:'column',
      alignItems:'center',
      justifyContent:"center",
      height:'300px'
    }} >
      <div style={{
      width:"400px"
    }}>
        <h1 style={{
          textAlign:'center'
        }}>SUBSCRIBE TO OUR EMAIL LIST</h1>
        <form style={{
          textAlign:'center',
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
        }}>
          <input type="text" placeholder="What's your email?" style={{
            width: '100%',
            background:'transparent',
            border: 'none',
            borderBottom: '1px white solid'
          }}/>
          <button type='submit' style={{
            width:'80px',
            height: '30px',
            margin:'20px 0px'
          }}>Submit</button>
        </form>
      </div>
    </div>
    
  )
}

export default Footer;

