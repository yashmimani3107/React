import React from "react";
import ReactDOM from "react-dom/client";


const Header = () =>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
        </div> 
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li> Cart</li>
      </ul>
    </div>
    </div>
  );
};
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla,cloudinaryImageId } = resData; // Destructure the needed properties
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
      />
      <h3>{name}</h3> 
      <h4>{cuisines.join(", ")}</h4> {/* Join cuisines array into a string */}
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

const resObj =[
  {
    type : "restraurant",
                                    
                                        info: {
                                            "id": "358684",
                                            name: "The Belgian Waffle Co.",
                                            "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                                            "locality": "Jai Narayan Vyas Colony",
                                            "areaName": "Sadul Ganj",
                                            "costForTwo": "₹200 for two",
                                            cuisines: [
                                                "Waffle",
                                                "Desserts",
                                                "Ice Cream",
                                                "Beverages"
                                            ],
                                            avgRating: 4.5,
                                            "veg": true,
                                            "parentId": "2233",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "625",
                                            "sla": {
                                                deliveryTime: 31,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/the-belgian-waffle-co-jai-narayan-vyas-colony-sadul-ganj-rest358684",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "658505",
                                            "name": "Burger Farm",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_658505.JPG",
                                            "locality": "Jai Narayan Vyas Colony",
                                            "areaName": "Tilak Nagar",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "Beverages",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "4660",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "2.3K+",
                                            "sla": {
                                                "deliveryTime": 25,
                                                "lastMileTravel": 3.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-02 01:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "40% OFF",
                                                "subHeader": "UPTO ₹80"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/burger-farm-jai-narayan-vyas-colony-tilak-nagar-rest658505",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "522172",
                                            "name": "Kwality Walls Ice Cream and More",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/6b19b236-85f6-4663-9e60-92bbd20e8aba_522172.JPG",
                                            "locality": "Station Road",
                                            "areaName": "BIkaner Fort",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Desserts",
                                                "Ice Cream",
                                                "Ice Cream Cakes"
                                            ],
                                            "avgRating": 4.6,
                                            "veg": true,
                                            "parentId": "582",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "756",
                                            "sla": {
                                                "deliveryTime": 18,
                                                "lastMileTravel": 0.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "0.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 23:15:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹100 OFF",
                                                "subHeader": "ABOVE ₹349",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/kwality-walls-ice-cream-and-more-station-road-bikaner-fort-rest522172",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "179239",
                                            "name": "Bhaa Food and Caterers",
                                            "cloudinaryImageId": "x1tqemq7hfe69cfthmhr",
                                            "locality": "Sadul Singh Circle",
                                            "areaName": "Junagarh Fort",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Thalis",
                                                "North Indian",
                                                "Indian"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "43876",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "6.9K+",
                                            "sla": {
                                                "deliveryTime": 20,
                                                "lastMileTravel": 0.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "0.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹125 OFF",
                                                "subHeader": "ABOVE ₹249",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/bhaa-food-and-caterers-sadul-singh-circle-junagarh-fort-rest179239",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "190459",
                                            "name": "Heeralal's",
                                            "cloudinaryImageId": "gv2xj4nkkusg8epwhtdp",
                                            "locality": "Station Road",
                                            "areaName": "Station Road",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Chaat",
                                                "South Indian",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.2,
                                            "veg": true,
                                            "parentId": "95287",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "2.7K+",
                                            "sla": {
                                                "deliveryTime": 21,
                                                "lastMileTravel": 1.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "1.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 23:15:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "subHeader": "UPTO ₹100"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/heeralals-station-road-rest190459",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "211773",
                                            "name": "Lalji (L.J.& Co.)",
                                            "cloudinaryImageId": "jxtwikgleb3td8et6jxn",
                                            "locality": "Station Road",
                                            "areaName": "Kote Gate",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Sweets",
                                                "South Indian",
                                                "Chaat",
                                                "Street Food",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.3,
                                            "veg": true,
                                            "parentId": "123339",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "9.0K+",
                                            "sla": {
                                                "deliveryTime": 19,
                                                "lastMileTravel": 0.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "0.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Dosa.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Dosa.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/lalji-l-j-and-co-station-road-kote-gate-rest211773",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "187206",
                                            "name": "Shri Shri Ganesh Hotel",
                                            "cloudinaryImageId": "lkvkvnokqbusqxmgsst0",
                                            "locality": "Joshiwara",
                                            "areaName": "Bada Bazar",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Indian",
                                                "Thalis",
                                                "Biryani"
                                            ],
                                            "avgRating": 4.3,
                                            "veg": true,
                                            "parentId": "187023",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "4.3K+",
                                            "sla": {
                                                "deliveryTime": 23,
                                                "lastMileTravel": 2.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹159"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/shri-shri-ganesh-hotel-joshiwara-bada-bazar-rest187206",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "138049",
                                            "name": "Chhappan Bhog",
                                            "cloudinaryImageId": "yfxsyaalbssn3spqfyo6",
                                            "locality": "Station Road",
                                            "areaName": "Station Road",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Sweets",
                                                "Snacks",
                                                "Desserts",
                                                "Bakery"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "60152",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "4.0K+",
                                            "sla": {
                                                "deliveryTime": 16,
                                                "lastMileTravel": 1.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "1.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 22:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "20% OFF",
                                                "subHeader": "UPTO ₹50"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/chhappan-bhog-station-road-rest138049",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "148187",
                                            "name": "Bhookh Lagi Hai",
                                            "cloudinaryImageId": "tvwkzz0e7xgdtqlbopip",
                                            "locality": "Sector 5",
                                            "areaName": "JNV Colony",
                                            "costForTwo": "₹500 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Burgers",
                                                "Pastas",
                                                "Chinese",
                                                "Tandoor"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "45106",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "6.7K+",
                                            "sla": {
                                                "deliveryTime": 24,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "10% OFF",
                                                "subHeader": "ABOVE ₹749",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/bhookh-lagi-hai-sector-5-jnv-colony-rest148187",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "590667",
                                            "name": "Wrapstick",
                                            "cloudinaryImageId": "mn5qrj7yf4o3rx2sdodu",
                                            "locality": "Jai Narayan Vyas Colony",
                                            "areaName": "JNV Colony",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Barbecue",
                                                "Burgers",
                                                "Pizzas",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "226993",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "568",
                                            "sla": {
                                                "deliveryTime": 24,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹109"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/wrapstick-jai-narayan-vyas-colony-jnv-colony-rest590667",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "700331",
                                            "name": "Love Over Coffee",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/81969dfb-8771-438a-b4f0-f196a2c4cf85_700331.jpg",
                                            "locality": "Jai narayan vyas colony",
                                            "areaName": "JNV Colony",
                                            "costForTwo": "₹550 for two",
                                            "cuisines": [
                                                "Beverages",
                                                "Pizzas",
                                                "Burgers",
                                                "Pastas",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "126238",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "306",
                                            "sla": {
                                                "deliveryTime": 26,
                                                "lastMileTravel": 3.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/love-over-coffee-jai-narayan-vyas-colony-jnv-colony-rest700331",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "633096",
                                            "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
                                            "cloudinaryImageId": "d679c532ca07a6f3fd6d89d603861412",
                                            "locality": "Jai Narayan Vyas Colony",
                                            "areaName": "Tilak Nagar",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Ice Cream Cakes",
                                                "Desserts",
                                                "Ice Cream",
                                                "Bakery"
                                            ],
                                            "avgRating": 4.9,
                                            "veg": true,
                                            "parentId": "21932",
                                            "avgRatingString": "4.9",
                                            "totalRatingsString": "10",
                                            "sla": {
                                                "deliveryTime": 24,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "subHeader": "UPTO ₹80"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/gourmet-ice-cream-cakes-by-baskin-robbins-jai-narayan-vyas-colony-tilak-nagar-rest633096",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "502060",
                                            "name": "Grameen Kulfi",
                                            "cloudinaryImageId": "l3hj5bslrcg0mfwpmnry",
                                            "locality": "Kanta khaturia colony",
                                            "areaName": "Sadul Ganj",
                                            "costForTwo": "₹120 for two",
                                            "cuisines": [
                                                "Ice Cream",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.8,
                                            "veg": true,
                                            "parentId": "12175",
                                            "avgRatingString": "4.8",
                                            "totalRatingsString": "387",
                                            "sla": {
                                                "deliveryTime": 25,
                                                "lastMileTravel": 4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "4.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "60% OFF",
                                                "subHeader": "UPTO ₹120"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/grameen-kulfi-kanta-khaturia-colony-sadul-ganj-rest502060",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "159920",
                                            "name": "Laziz Pizza",
                                            "cloudinaryImageId": "queduzulhjbmf4w8tfvw",
                                            "locality": "Old Gajner Road",
                                            "areaName": "Jassusar Gate",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Burgers",
                                                "Pastas"
                                            ],
                                            "avgRating": 4,
                                            "veg": true,
                                            "parentId": "2299",
                                            "avgRatingString": "4.0",
                                            "totalRatingsString": "2.1K+",
                                            "sla": {
                                                "deliveryTime": 22,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹139"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/laziz-pizza-old-gajner-road-jassusar-gate-rest159920",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "743292",
                                            "name": "Grill Masters",
                                            "cloudinaryImageId": "d594f1d2d5b94dd66af05b9342222ac6",
                                            "locality": "Bikaner",
                                            "areaName": "JNV Colony",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Burgers",
                                                "Pastas",
                                                "Beverages",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.1,
                                            "veg": true,
                                            "parentId": "19537",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "426",
                                            "sla": {
                                                "deliveryTime": 22,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹100 OFF",
                                                "subHeader": "ABOVE ₹349",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/grill-masters-jnv-colony-rest743292",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "410115",
                                            "name": "Hungry Point",
                                            "cloudinaryImageId": "o5twtx9ndyxpnbdlohyn",
                                            "locality": "Jai Narayan Vyas Colony",
                                            "areaName": "JNV Colony",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Burgers",
                                                "Pastas",
                                                "Fast Food",
                                                "Desserts"
                                            ],
                                            "avgRating": 4,
                                            "veg": true,
                                            "parentId": "5290",
                                            "avgRatingString": "4.0",
                                            "totalRatingsString": "900",
                                            "sla": {
                                                "deliveryTime": 27,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "40% OFF",
                                                "subHeader": "UPTO ₹80"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/hungry-point-jai-narayan-vyas-colony-jnv-colony-rest410115",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "432848",
                                            "name": "Dosa Plaza",
                                            "cloudinaryImageId": "e5jngggdb5iyh0ujh4ew",
                                            "locality": "Jai Narayan Vyas Colony",
                                            "areaName": "JNV colony",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Beverages",
                                                "Pizzas",
                                                "Burgers",
                                                "Pastas"
                                            ],
                                            "avgRating": 4.1,
                                            "veg": true,
                                            "parentId": "1398",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "343",
                                            "sla": {
                                                "deliveryTime": 28,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "10% OFF",
                                                "subHeader": "UPTO ₹40"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/dosa-plaza-jai-narayan-vyas-colony-jnv-colony-rest432848",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "457448",
                                            "name": "Annapurna Restaurant",
                                            "cloudinaryImageId": "juhgjbt6ucceerdhboye",
                                            "locality": "Bagree Ka Mohalla Main Road",
                                            "areaName": "Bada Bazar",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Indian",
                                                "Tandoor"
                                            ],
                                            "avgRating": 4.2,
                                            "veg": true,
                                            "parentId": "2957",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "630",
                                            "sla": {
                                                "deliveryTime": 25,
                                                "lastMileTravel": 2.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹99"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/annapurna-restaurant-bagree-ka-mohalla-main-road-bada-bazar-rest457448",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "229228",
                                            "name": "Punjabi Rasoi",
                                            "cloudinaryImageId": "v169obsgdddfucxgcn7t",
                                            "locality": "Jaisalmer Road",
                                            "areaName": "Bhutto Ka Choraha",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Indian",
                                                "Tandoor"
                                            ],
                                            "avgRating": 4,
                                            "parentId": "1270",
                                            "avgRatingString": "4.0",
                                            "totalRatingsString": "1.7K+",
                                            "sla": {
                                                "deliveryTime": 25,
                                                "lastMileTravel": 2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 16:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "15% OFF",
                                                "subHeader": "ABOVE ₹699",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/punjabi-rasoi-jaisalmer-road-bhutto-ka-choraha-rest229228",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "424710",
                                            "name": "Food Villa",
                                            "cloudinaryImageId": "nlovmgff732w4werditj",
                                            "locality": "Polytechnic College Road",
                                            "areaName": "Sadul Ganj",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.3,
                                            "veg": true,
                                            "parentId": "8468",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "374",
                                            "sla": {
                                                "deliveryTime": 22,
                                                "lastMileTravel": 2.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-01 22:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹125 OFF",
                                                "subHeader": "ABOVE ₹249",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bikaner/food-villa-polytechnic-college-road-sadul-ganj-rest424710",
                                            "type": "WEBLINK"
                                        }
                                    }
                                ]
const Body = () =>{
  return (
    <div className="body">
      <div className="Search"> Search</div>
      <div className="res-container">
      {resObj.map((restaurant) => (
        <RestaurantCard  resData={restaurant.info} />
      ))}
        
         </div> 

    </div>
  );
};
const AppLayout = () =>{
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/> );

