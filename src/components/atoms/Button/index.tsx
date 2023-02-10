import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send'; 

    const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

const BasicButtons =() => {
  return (
    <><Stack spacing={2} direction="row" sx={{display: "flex", flexWrap: "wrap"}}>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="secondary">Contained</Button>
      <Button variant="outlined" color='success'> <b>hello click me </b> </Button>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <Button variant="contained" disabled> Disabled</Button>
      <Button onClick={() => { alert('clicked'); } }>Click me </Button>
      <Button variant="contained" component="label"> Upload  <input hidden accept="image/*" multiple type="file" /> </Button>

       <IconButton color="primary" aria-label="upload picture" component="label"> <input hidden accept="image/*" type="file" />
    <PhotoCamera /> </IconButton>
    <Button variant="outlined" startIcon={<DeleteIcon />}> Delete </Button>
    <Button variant="contained" endIcon={<SendIcon />}> Send </Button> 

      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>

      <ButtonGroup variant="text" aria-label="text button group">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    </Stack>

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
        <ButtonGroup size="small" aria-label="small button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup color="secondary" aria-label="medium secondary button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>
      </Box>
      </>
  );
}
export default BasicButtons;

