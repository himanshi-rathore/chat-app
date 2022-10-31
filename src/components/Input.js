import React from 'react'
import Img from '../img/img.png'
import Attach from '../img/attach.png'
function Input() {
  return (
    <div className="input">
      <input className='textArea' type='text' placeholder='Type something...' />
      <div className="send">
        <img className='input-img' src={Attach} alt='' />
        <input  type='file' style={{display:"none"}}  id='file' />
        <label htmlFor='file'>
          <img className='input-img' src={Img} alt='' />
        </label>
        <button>send</button>
      </div>
    </div>
  )
}

export default Input
