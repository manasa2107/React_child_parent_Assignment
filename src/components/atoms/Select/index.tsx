 import * as React from 'react';
 import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const BasicSelect =()=> {
  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
     <Box  width='450px' sx={{pl:5,mt:3,mb:22}}>
      <FormControl variant="filled" size="small" fullWidth required>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select   MenuProps={{ sx: { "&& .Mui-selected:hover": {  backgroundColor: "red" },"&& .Mui-selected": { backgroundColor: "green"}} }}
        labelId="demo-simple-select-label"  id="demo-simple-select" value={age} label="Age" autoWidth onChange={handleChange}>
          <MenuItem sx={{width:450}} value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value=""> <em>None</em> </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default BasicSelect;

/*
import {Box, TextField, MenuItem} from '@mui/material'
import  React, {useState } from 'react'

export const BasicSelect = () => {
  const [age, setAge] = useState('');
  console.log(age)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setAge(event.target.value as string)
  }
  return (
  <Box width='450px' sx={{pl:5,mb:22}}>
    <TextField label="select Age" select value={age} onChange={handleChange} fullWidth required 
    SelectProps= {{ MenuProps={{sx={ "&& .Mui-selected:hover": {  backgroundColor: "red" },"&& .Mui-selected": { backgroundColor: "green"}} }} }}>
      <MenuItem value='10'>Ten</MenuItem>
      <MenuItem value='20'>Twenty</MenuItem>
      <MenuItem value='30'>Thirty</MenuItem>
      <MenuItem value=""> <em>None</em> </MenuItem>
    </TextField>
  </Box>
  );
}
export default BasicSelect;
*/