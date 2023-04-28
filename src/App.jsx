import { useEffect, useState } from 'react';
import './App.css';
import Gallery from './Components/Gallery';
import SearchBar from './Components/SearchBar';

function App() {
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const [message, setMessage] = useState("Search for Music!")

  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch('https://itunes.apple.com/search?term=nirvana')
      const resData = await response.json()
      if (resData.results.length > 0) {
        setData(resData.results)
      } else {
        setMessage('Artist not found!')
      }
    }
    fetchData()
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery />
    </div>
  );
}

export default App;
