import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Profile from './components/profile';
import Nav from './components/nav';
import Rockets from './components/Rockets';
import Missions from './components/missions';

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
