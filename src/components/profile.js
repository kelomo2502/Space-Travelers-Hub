/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const rocketsData = useSelector((state) => state.rockets.rockets);
  const reservedList = rocketsData.filter((rocket) => rocket.reserved === true);
  const missionProfile = useSelector((state) => [
    {
      MissionTitle: 'My Mission',
      data: state.missions.filter((mission) => mission.reserved),
    },
  ]);

  return (
    <div className="Profile-container">
      <h2>My Profile</h2>
      <div className="Section">
        {missionProfile.map(({ MissionTitle, data }) => (
          <div className="Missions">
            <h4>{MissionTitle}</h4>
            <div className="Content">
              {
                !data.length
                  ? <p>No Missions</p>
                  : data.map((item) => <p key={item.id}>{item.name}</p>)
              }
            </div>
          </div>
        ))}
        <div className="Rockets">
          <h4>My Rockets</h4>
          <div className="Content">
            {
              !reservedList.length
                ? <p>No reservation!</p>
                : reservedList.map((rocket) => <p key={rocket.id}>{rocket.rocket_name}</p>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
