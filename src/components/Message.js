import React from 'react'
import profile from '../img/pngwing.com.png';

function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={profile} alt='' />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p className='text'>hello</p>
        <img className='text-img' src={profile} alt='' />
      </div>
    </div>
  )
}

export default Message
