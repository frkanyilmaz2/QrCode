import React from 'react'
import Icon from './images/image-qr-code.png'

const Card = () => {
  return (
    <div className='container'>
        <img src={Icon} alt="icon" width='100%' style={{borderRadius:'10%'}}/>
        <h3>Improve your front-end skills by building projects</h3>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  )
}

export default Card