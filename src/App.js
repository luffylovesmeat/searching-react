import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CompleteData from './components/CompleteData';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  const [search, setSearch] = useState('')
  const [banks, setBanks] = useState([])

  const fetchBanks = async () => {
    const res = await axios.get('https://searchapi-v1.herokuapp.com/api/v1/banks')
    setBanks(res.data)
  }

  useEffect(() => {
    fetchBanks()
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <SearchBar state={search} setState={setSearch} />
        <Routes>
          <Route path='/' element={<CompleteData data={banks} />} />
          <Route path='/:search' element={<SearchResults />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
