import  { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import {Link} from "react-router-dom"
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("home")
    const {getTotalCartAmount} = useContext(StoreContext)
    
  return (
    <div className='navbar'>
       <img className="logo" src={assets.logo} alt="" />
       <ul className='navbar-menu'>
        <Link to="/" onClick={()=>{
          setMenu("home")
        }} className={menu === "home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>{
          setMenu("Menu")}} className={menu ==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>{
          setMenu("Mobile")}} className={ menu==="Mobile"?"active":""}>Mobile app</a>
        <a href='#footer' onClick={()=>{
          setMenu("contact")}} className={menu ==="contact"?"active":""}>Contact us</a>
       </ul>
       <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
            <Link to= '/cart'>
            <img src={assets.basket_icon} /></Link>
            <div className={getTotalCartAmount()===0?'':'dot'}></div>

        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
       </div>
    </div>
  )
}

export default Navbar