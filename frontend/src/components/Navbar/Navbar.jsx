import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from "../../assets/assets";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {

const [menu,setMenu]=useState("menu");
const [isProfileOpen, setIsProfileOpen] = useState(false);
const {getTotalCartAmount,token,setToken, searchQuery, setSearchQuery} = useContext(StoreContext);

const navigate = useNavigate();
const logout = () =>{
  localStorage.removeItem("token");
  setToken("");
  navigate("/")
}

const handleMenuClick = (menuName, id) => {
    setMenu(menuName);
    if(window.location.pathname !== '/') {
        navigate('/');
    }
    setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    }, 100);
}

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <ul className="navbar-menu">
          <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
          <li onClick={()=>handleMenuClick("menu", "explore-menu")} className={menu==="menu"?"active":""} style={{cursor:"pointer"}}>Menu</li>
          <li onClick={()=>handleMenuClick("mobile-app", "app-download")} className={menu==="mobile-app"?"active":""} style={{cursor:"pointer"}}>Mobile-app</li>
          <li onClick={()=>handleMenuClick("contact us", "footer")} className={menu==="contact us"?"active":""} style={{cursor:"pointer"}}>Contact Us</li>
        </ul>
        <div className="navbar-right">
          
          <div className="navbar-search-container" style={{display:'flex', alignItems:'center', background:'var(--glass-bg)', borderRadius:'20px', padding:'8px 15px', border:'1px solid var(--glass-border)'}}>
            <input 
               type="text" 
               placeholder="Search food..." 
               value={searchQuery} 
               onChange={(e)=>{
                 setSearchQuery(e.target.value);
                 if(window.location.pathname !== '/') navigate('/');
               }} 
               style={{background:'transparent', border:'none', color:'white', outline:'none', width:'120px'}} 
            />
            <img src={assets.search_icon} alt="" style={{width:'20px', cursor:'pointer'}} />
          </div>

          <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          {!token? <button onClick={()=>setShowLogin(true)}>Sign Up</button>:
          <div className='navbar-profile' onClick={() => setIsProfileOpen(!isProfileOpen)}>
            <img src={assets.profile_icon} alt="" />
            <ul className={`nav-profile-dropdown ${isProfileOpen ? 'active-dropdown' : ''}`}>
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>}
         
        </div>
    </div>
  )
}

export default Navbar