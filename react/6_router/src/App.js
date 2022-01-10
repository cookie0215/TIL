
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import NavLinks from './components/Links';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <NavLinks />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
