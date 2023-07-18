import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Homepage from './Pages/Homepage/Homepage';
import SuggestionBox from './Components/SuggestionBox/SuggestionBox';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage/>
      <SuggestionBox/>
    </div>
  );
}

export default App;
