import './App.css';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/profile';
import Nav from './components/nav';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
