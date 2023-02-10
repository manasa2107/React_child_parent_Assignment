import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const  Checkboxes = ()=> {
  return (
    <div>
      <Stack direction="row" sx={{mb:3}}>
      <Checkbox {...label} defaultChecked/>
      <Checkbox {...label} color="secondary" />
      <Checkbox {...label} disabled size="small"/>
      <Checkbox {...label} disabled checked  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox {...label} icon={<BookmarkBorderIcon />}checkedIcon={<BookmarkIcon />} />
      </Stack>
    </div>
  );
}
export default Checkboxes;