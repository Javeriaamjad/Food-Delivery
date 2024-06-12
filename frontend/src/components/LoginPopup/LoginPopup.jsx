import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
  const [currState ,setCurrState] = useState("Sign up")
  return (
    <dv className="login-popup">
        <form action="" className="login-popup-container">
          <div className="logi-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />

          </div>
        </form>
    </dv>
  )
}

export default LoginPopup