import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider ,Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";

// const [userName,setUserName] = useState();

// useEffect(()=>{

//   const data ={
//     name : "Yash"
//   }
//   setUserName(data.name);

// },[])



const AppLayout = () =>{
  return(
    // <UserContext.Provider value={{loggedInUser:userName}}>
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
    // </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path:"/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path:"/restaurants/:resId",  // resid is dynamic
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/> );

