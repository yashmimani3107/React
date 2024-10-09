import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import {useState} from "react";

const Header = () =>{

  const [btnNameReact ,setbtnName] = useState("Login");
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}/>
          </div> 
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About Us</Link></li>
          <li>
            <Link to="/contact">Contact Us</Link></li>
          <li> Cart</li>
          <button className="login" 
          onClick={()=>{
           btnNameReact === "Login" ? setbtnName("Logout") : setbtnName("Login") ;
          }}  >{btnNameReact}</button>
        </ul>
      </div>
      </div>
    );
  };

  export default Header;