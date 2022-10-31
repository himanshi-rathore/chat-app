 import React from 'react'
 import profile from '../img/pngwing.com.png'
 
 function Navbar() {
   return (
     <div className="navbar">
     <span className="title_logo">Lama Chat</span>
      <div className="user">
      <img className='pic' src={profile} alt='avatar' />
      <span>John</span>
      <button className='logout'>logout</button>

      </div>
     </div>
   )
 }
 
 export default Navbar
 