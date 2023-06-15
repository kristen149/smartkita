// material-ui
import PropTypes from 'prop-types';
import { Box, FormControl, Typography } from '@mui/material';

// assets
// import { SearchOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = ({ item }) => {

return(
  <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
    <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
      {/* <OutlinedInput
        size="small"
        id="header-search"
        startAdornment={
          <InputAdornment position="start" sx={{ mr: -0.5 }}>
            <SearchOutlined />
          </InputAdornment>
        }
        aria-describedby="header-search-text"
        inputProps={{
          'aria-label': 'weight'
        }}
        placeholder="Ctrl + K"
      /> */}

      <Typography
        sx={{
          color: '#FFF',
          fontSize: '20px'
        }}
      >

        {item}
      

      </Typography>


    </FormControl>
  </Box>
)
};

Search.propTypes = {
  item: PropTypes.string

};

export default Search;
