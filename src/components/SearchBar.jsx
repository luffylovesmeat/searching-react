import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ state, setState }) => {
  const handleClick = (e) => {
    e.preventDefault()
  }
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Search"
        inputProps={{ 'aria-label': 'Search' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} onClick={handleClick} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar