import { useState } from 'react';
import './App.css';
import Gallery from './Components/Gallery';
import SearchBar from './Components/SearchBar';

function App() {
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const [message, setMessage] = useState("Search for Music!")

  return (
    <div className="App">
      <SearchBar />
      {message}
      <Gallery />
    </div>
  );
}

export default App;
