import { CLOUDINARY_IMAGE } from "../utils/constatnts";

const RestaurantCard = (props) => {

  const {resCard} = props;
  
  const { name, cuisines, cloudinaryImageId, avgRating, sla: {slaString} } = resCard.card.info;

  return (
    <div className="res-card" style={{ backgroundColor: "lightgray" }}>
      <img src={`${CLOUDINARY_IMAGE}${cloudinaryImageId}`} alt="dish" />
      <h3>{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}.</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{slaString}</h4>
    </div>
  )
}

export default RestaurantCard;