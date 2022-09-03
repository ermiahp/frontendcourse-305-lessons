import React, { useState } from 'react';
import './Search.scss';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { baseURL } from '../api/config';

const Search = ({getImags}) => {
    const [search,setSearch] = useState('');
    const searchPics = () => {
        axios.get(baseURL(search))
        .then(res => {
            console.log(res.data);
            getImags(res.data.photos.photo)
        })
    }

    return(
       <>
         <TextField  id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
            onChange={(event) => 
                        setSearch(event.target.value)}/>
         <Button variant="contained" 
         onClick={searchPics}>Search</Button>
       </>
    )
}

export default Search;