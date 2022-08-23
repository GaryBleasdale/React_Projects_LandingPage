import React from "react";

 const ServiceCard =(props)=> {
  
  return(
    <div style={{
      display:'flex',
      flexDirection:'column'
    }} className='service-card'>     
      <img src={props.imgsrc} alt="imaged" />
      <h2 style={{
        color:'#806c6c'
      }}> {props.title}</h2>
    </div>
  )
}

export default ServiceCard