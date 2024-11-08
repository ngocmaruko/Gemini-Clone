import React from 'react'
import './Main.css';
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello There.</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest peaceful places to nurture one's soul</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Definition of this word: love</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Introspection helps our mentality</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Ways to concise the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-button">
          <div className="search-box">
            <input type="text" placeholder='Enter a promt here' />
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main