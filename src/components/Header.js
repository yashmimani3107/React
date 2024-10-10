import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import {useState} from "react";

const Header = () =>{

  const [btnNameReact ,setbtnName] = useState("Login");
    return(
      <div className="flex justify-between shadow-lg mb-2">
        <div className="logo-container">
          <img className="w-48" src={LOGO_URL}/>
          </div> 
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link></li>
          <li className="px-4" >
            <Link to="/about">About Us</Link></li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link></li>
          <li className="px-4"> Cart</li>
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