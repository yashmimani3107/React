import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, sla,cloudinaryImageId } = resData; // Destructure the needed properties
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={ CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3> 
        <h4>{cuisines.join(", ")}</h4> {/* Join cuisines array into a string */}
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    );
  };

  export default RestaurantCard;