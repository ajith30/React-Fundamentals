import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

  //useState() Hook
  const [restaurantList, setResList] = useState(resList);


  return (
    <div className="body">
      {/* <div className="search">Search</div> */}

      <button className="res-btn" onClick={() => {
        const filteredRestaurants = restaurantList.filter((restaurant) => restaurant.card.info.avgRating > 4);
        console.log(filteredRestaurants);
        setResList(filteredRestaurants);
      }}>Top Rated Restaurant</button>
      <div className="res-container">
        { restaurantList.map((restaurant) => <RestaurantCard key={restaurant.card.info.id} resCard={restaurant}/>)}
      </div>
    </div>
  )
}

export default Body;