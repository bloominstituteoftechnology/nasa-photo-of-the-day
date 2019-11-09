import React,{useState} from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Button, Icon } from "@material-ui/core";

const SearchBar =({search,setSearch})=>{

    
    
    const [inputStore,setInputStore] = useState("");

    const handleSubmit = () => {
        setSearch(inputStore);
    };

    const handleChange = event =>{
        setInputStore(event.target.value)

    }

    const handleKeyDown = event =>{
        if(event.key === "Enter"){
            setSearch(inputStore);
            
        }
    }

    return(
    <div>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search By Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={inputStore}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            
            endAdornment={
              <InputAdornment position="end">
                <Button onClick={handleSubmit}>
                    <Icon>search</Icon>
                </Button>
              </InputAdornment>
            }
            labelWidth={120}
          />
        </FormControl>
    </div>
    )

}

export default SearchBar;