import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*kxBdslclglg4zgCw0NMIIA.png" alt="" width={233} style={{backdropFilter:"blur(4px)"}}/>
      <h1>{props.Title}</h1>
      <p>{props.Desc}</p>
    </div>
  )
}

export default Card
