/* eslint-disable */
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../redux/missions/fetchMissionData';
import '../App.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions);
    }
  }, []);

  const joinMissionHandle = (id) => dispatch(joinMission(id));
  const leaveMissionHandler = (id) => dispatch(leaveMission(id));

  return (
    <Container className="mission-cont">
      <Table className="tab-container">
        <thead>
          <tr className="tab-row">
            <th className="mission-head">Mission</th>
            <th className="desc-head">Description</th>
            <th className="stat-head">Status</th>
            <th>{"  "}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map(({
            id, name, description, reserved,
          }) => (
            <tr 
              className="wrapper"
              key={id}
              >
              <td>
                <p className="name-cell">{name}</p>
              </td>
              <td>
                <p className="desc-cell">{description}</p>
              </td>
              <td className="badge-cont">
                {reserved && <span className="act-badge">Active Member</span>}
                {!reserved && <span className="badge">NOT A MEMBER</span>}
              </td>
              <td className="button-cont">
                {reserved && (
                <Button 
                  className="leave-btn"
                  size="sm" 
                  variant="outline-danger"
                  onClick={() => leaveMissionHandler(id)}>
                  Leave Mission
                </Button>
                )}
                {!reserved && (
                <Button 
                  className="join-btn"
                  size="sm" 
                  variant="outline-secondary"
                  onClick={() => joinMissionHandle(id)}>
                  Join Mission
                </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;

