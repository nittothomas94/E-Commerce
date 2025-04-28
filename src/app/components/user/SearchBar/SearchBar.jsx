'use client';

import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IoSearch } from 'react-icons/io5';

const SearchInput = () => {
  return (
    <TextField
      placeholder="Search"
      variant="standard"
      size="small"
      className="bg-gray-100 w-30 md:w-35 lg:w-45 rounded-2xl"
      InputProps={{
        // <-- changed from startAdornment to endAdornment
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
    // <div className="flex items-center justify-between bg-gray-100 w-30 md:w-35 lg:w-45 rounded-2xl">
    //   <input type="text" />
    //   {/* <SearchIcon /> */}
    //   <IoSearch className="text-black" />
    // </div>
  );
};

export default SearchInput;
