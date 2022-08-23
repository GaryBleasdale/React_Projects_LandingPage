import ServiceCard from "./service-card";

export default function Services(){
  return (
    <div className='services-container'>
      <h3 style ={{
        color: "#133588",
        fontSize: '32px',
        textAlign:'center'
      }}>OUR SERVICES</h3>
      <div className='service-listing'>
      < ServiceCard title="WEB DESIGN" imgsrc="https://assets.codepen.io/6060109/agency-service-1.png" />
      < ServiceCard title="ECOMMERCE" imgsrc="https://assets.codepen.io/6060109/agency-service-2.png" />
      < ServiceCard title="AUTOMATION" imgsrc="https://assets.codepen.io/6060109/agency-service-3.png"/>
    </div>    
    </div>
  )
}