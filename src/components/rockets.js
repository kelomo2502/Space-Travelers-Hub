/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCards from './RocketCards';
import fetchRocketsData from '../redux/rockets/fetchRocketsData';
import '../styles/Rockets.css';

const Rockets = () => {
  const rocketsData = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rocketsData.length) {
      dispatch(fetchRocketsData());
    }
  }, []);

  const rocketList = rocketsData.map((rocket) => (
    <RocketCards
      key={rocket.id}
      rocketId={rocket.id}
      title={rocket.rocket_name}
      image={rocket.flickr_images[0]}
      description={rocket.description}
      isReserved={rocket.reserved}
    />
  ));

  return (
    <div className="Rockets">
      {rocketList}
    </div>
  );
};

export default Rockets;
