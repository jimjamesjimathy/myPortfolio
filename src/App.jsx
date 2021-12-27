import Topbar from './Components/Topbar/Topbar';
import Menu from './Components/Menu/Menu';
import Introduction from './Components/Introduction/Introduction';
import Portfolio from './Components/Portfolio/Portfolio';
import Reviews from './Components/Reviews/Reviews';
import Contact from './Components/Contact/Contact';
import { useState } from 'react';

import './App.scss';


function App() {
  const [menuOpen, setMenuOpen] = useState(null)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Introduction />
        <Portfolio />
        <Reviews />
        <Contact />
      </div>
    </div>
  );
}

export default App;
