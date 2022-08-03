import './App.css';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/profile';
import Nav from './components/nav';
import Rockets from './components/rockets';
import Missions from './components/missions';

function App() {
  return (
    <div className="page">
      <Nav />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
