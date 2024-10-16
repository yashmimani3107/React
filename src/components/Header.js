import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import {useState,useContext} from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{

  const [btnNameReact ,setbtnName] = useState("Login");
  const data = useContext(UserContext);

  // selector -> subscribing to the store 

  const cartItems = useSelector((store) => store.cart.items);
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
            <li className="px-4 text-xl font-bold"><Link to="/cart">Cart({cartItems.length} items)</Link></li>

          <button className="login" 
          onClick={()=>{
           btnNameReact === "Login" ? setbtnName("Logout") : setbtnName("Login") ;
          }}  >{btnNameReact}</button>
           <li className="px-4">{data.loggedInUser} </li>
        </ul>
      </div>
      </div>
    );
  };

  export default Header;