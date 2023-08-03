import './App.css';
import { useState, useEffect } from 'react';
import Navbar from "./Components/Navbar/Navbar"
import Homepage from './Pages/Homepage/Homepage';
import SuggestionBox from './Components/SuggestionBox/SuggestionBox';
import Bookmarks from './Pages/Bookmarks/Bookmarks';

function App() {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(null);
  return (
    <div className="App">
      <Navbar setAccount={setAccount} setConnected={setConnected} />
      <Homepage />
      <SuggestionBox />
    </div>
  );
}

export default App;
