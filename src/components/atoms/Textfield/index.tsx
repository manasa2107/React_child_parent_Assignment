import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextFields =() => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField required id="outlined-required" label="Required" defaultValue="Hello World" />
        <TextField disabled id="outlined-disabled" label="Disabled" defaultValue="Hello World" />
        <TextField id="outlined-password-input" label="Password"  type="password" autoComplete="current-password" />
        <TextField id="outlined-read-only-input" label="Read Only" defaultValue="Hello World" variant="filled" InputProps={{readOnly: true,}}/>
        <TextField id="outlined-number"  label="Number" type="number" variant="standard" InputLabelProps={{shrink: true,}} />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField id="outlined-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text"/>
        <TextField error id="outlined-error" label="error" defaultValue="Hello World" helperText="Incorrect entry." />
        <TextField id="outlined-multiline-flexible" label="Multiline" multiline maxRows={4} />
      </div>
    </Box>
  );
}
export default TextFields;