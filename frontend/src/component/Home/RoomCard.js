import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const RoomCard = ({ room }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: room.ratings,
    isHalf: true,
  };
  return (
    <Link className="roomCard" to={`/product/${room._id}`}>
      <img src={room.images[0].url} alt={room.name} />
      <p>{room.name}</p>
      <div>
        <ReactStars {...options} /> <span>({room.numOfReviews} reviews)</span>
      </div>
      <span>{`₹${room.price}`}</span>
    </Link>
  );
};

export default RoomCard;
