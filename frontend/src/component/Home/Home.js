import React, { Fragment, useEffect } from "react";
import "./Home.css";
import Room from "./RoomCard.js";
import MetaData from "../layout/MetaData.js";
import { getRoom, clearErrors } from "../../actions/roomAction.js";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, rooms, roomsCount } = useSelector(
    (state) => state.rooms
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getRoom());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Welcome to EasyStays.com!" />
          <div className="banner"></div>
          <h2 className="homeHeading">FEATURED ROOMS</h2>
          <div className="container" id="container">
            {rooms && rooms.map((room) => <Room room={room} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
