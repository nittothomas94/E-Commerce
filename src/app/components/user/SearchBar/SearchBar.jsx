'use client';

import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
  return (
    <TextField
      placeholder="Search"
      variant="standard"
      size="small"
      className="bg-gray-100 w-30"
      InputProps={{
        // <-- changed from startAdornment to endAdornment
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
