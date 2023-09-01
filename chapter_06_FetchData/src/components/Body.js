import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {

  //useState() Hook
  const [restaurantList, setResList] = useState([]);

  //useEffect() Hook
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const allRes = await response.json();

    const cardsWithRestaurants = allRes.data.cards.filter(card => 
      card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
    );
    //console.log(cardsWithRestaurants);


    const combinedRestaurants = cardsWithRestaurants.reduce((acc, card) => {
      const restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (Array.isArray(restaurants)) {
        return [...acc, ...restaurants];
      }
      return acc;
    }, []);

    //console.log("Combined restaurants:", combinedRestaurants);


    //To remove duplicates
    const uniqueArray = Array.from(new Set(combinedRestaurants.map(obj => obj.info.id))).map(id => {
      return combinedRestaurants.find(obj => obj.info.id === id);
    });
    
    //console.log(uniqueArray);
    
    setResList(uniqueArray);
    
  }
  

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}

      <button className="res-btn" onClick={() => {
        const filteredRestaurants = restaurantList.filter((restaurant) => restaurant.card.info.avgRating > 4);
        console.log(filteredRestaurants);
        setResList(filteredRestaurants);
      }}>Top Rated Restaurant</button>
      <div className="res-container">
        { restaurantList.map((restaurant) => {

          return <RestaurantCard key={restaurant.info.id} resCard={restaurant}/>
        })}
      </div>
    </div>
  )
}

export default Body;