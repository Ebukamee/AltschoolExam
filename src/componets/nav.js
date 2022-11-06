import "../Styles/nav.css";
import { NavLink } from "react-router-dom";
// import Logo from '../Images/logo.svg'

function Nav() {
    const blue= 'rgba(47,136,255,1)';
    const white='rgba(255,255,255)'
    return (
        <div className="nav">
            {/* <img src={Logo} alt='logo' className="logo" /> */}
            <div className="links">
             <NavLink className='link' to="/" style={({isActive}) => isActive ? {color: blue} : {color: {white}} }>Home </NavLink>
             <NavLink className='link' to="/testError" style={({isActive}) => isActive ? {color: blue} : {color: {white}} }>Test Error Boundary </NavLink>
             <NavLink className='link' to="/users" style={({isActive}) => isActive ? {color: blue} : {color: {white}} }>Login</NavLink>
            </div>
        </div>
    )
}

export default Nav;