import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";



const Body = () =>{
    // local state variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText , setSearchText] = useState("");

    useEffect(() =>{
        // fetch data from API
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.213005082226353&lng=77.39667668938637&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // console.log(json);
        // optional chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfRestaurants.length === 0){
      return <Shimmer/>
    }

    return (
      <div className="body">
        <div className="filter"> 
          <div className="search">
            <input type="text"className="search-box" value={searchText} onChange={ (e) => {setSearchText(e.target.value)}} ></input>
            <button
  onClick={() => {
    // filter
    const filteredRestaurant = listOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setFilteredRestaurant(filteredRestaurant);
  }}
>
  Search
</button>

          </div>
            <button className="filter-btn" 
            onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.4
                );
                setListOfRestaurant(filteredList);
            }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard  key = {restaurant.info.id} resData={restaurant.info} />
        ))}
          
           </div> 
  
      </div>
    );
  };

  export default Body;