import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, sla,cloudinaryImageId } = resData; // Destructure the needed properties
    return (
      <div className="m-4 p-4 w-48 bg-gray-200 hover:bg-gray-300">
        <img
          className="res-logo rounded-lg"
          alt="res-logo"
          src={ CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-xl" >{name}</h3> 
        <h4>{cuisines.join(", ")}</h4> {/* Join cuisines array into a string */}
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    );
  };

  export default RestaurantCard;