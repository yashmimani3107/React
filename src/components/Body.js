import RestaurantCard , {withPromotedLabel}from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // local state variables
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    // fetch data from API
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.213005082226353&lng=77.39667668938637&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    // optional chaining to avoid errors if structure changes
    const restaurants = json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants); // initialize both states with full data
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-100 rounded-lg"
            onClick={() => {
              // filter by search text
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="top-rated m-4 p-4">
          <button
            className="px-4 py-1 bg-gray-100 rounded-lg"
            onClick={() => {
              // filter by top rated
              const topRated = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilteredRestaurant(topRated); // only update filteredRestaurant
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap rounded-lg">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {
              restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant.info}/>) :
              (<RestaurantCard resData={restaurant.info} />)
}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
