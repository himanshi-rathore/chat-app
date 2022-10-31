import React from 'react'
import profile from '../img/pngwing.com.png'

function Search() {
  return (
   <div className="search">
    <div className="searchForm">
      <input type="text" placeholder='Find a user'/>
    </div>
    <div className="userChat">
      <img src={profile} alt="" />
      <div className="userChatInfo">
        <span>Jane</span>
      </div>
    </div>
   </div>
  )
}

export default Search
