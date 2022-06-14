import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CompleteData from './components/CompleteData';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  const [search, setSearch] = useState('')
  const [banks, setBanks] = useState([])

  const fetchBanks = async () => {
    const res = await axios.get('https://random-data-api.com/api/bank/random_bank?size=50')
    setBanks(res.data)
  }

  useEffect(() => {
    fetchBanks()
  }, [])

  return (
    <div className="App">
      <SearchBar state={search} setState={setSearch} />
      {search
        ? <SearchResults data={banks} search={search} />
        : <CompleteData data={banks} />
      }

    </div>
  );
}

export default App;
