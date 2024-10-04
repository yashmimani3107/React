import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import {useState,useEffect} from "react";



const Body = () =>{
    // local state variable
    const [listOfRestaurants, setListOfRestaurant] = useState(resObj);

    // useEffect(() =>{
        // fetch data from API
    //     fetchData();
    // },[]);

    // const fetchData = async () =>{
    //     const data = await fetch(
    //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.01750&lng=73.31930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //     )
    //     const json = data.json();
    //     console.log(json);
    // }

    return (
      <div className="body">
        <div className="filter"> 
            <button className="filter-btn" 
            onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.4
                );
                setListOfRestaurant(filteredList);
            }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard  key = {restaurant.info.id} resData={restaurant.info} />
        ))}
          
           </div> 
  
      </div>
    );
  };

  export default Body;