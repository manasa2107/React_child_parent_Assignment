import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AvatarGroup } from '@mui/material';

const ImageAvatars =()=> {
  return (
    <Stack  spacing={4} direction="row" mb={4}>
      <Avatar sx={{backgroundColor:'primary.light', width:48, height: 48}}>BW</Avatar>
      <Avatar variant="rounded" sx={{backgroundColor:'success.light', width:50, height: 50}}>CS</Avatar>
      <Avatar variant="square" sx={{backgroundColor:"deeppink", width:50, height: 50}}>CS</Avatar>
      <AvatarGroup max={3}>
      <Avatar src="https://i.pinimg.com/originals/f4/ed/18/f4ed18e4f8c07a1688153de9daa5bd6c.jpg" alt="jerry"/>
      <Avatar src="https://i.pinimg.com/550x/10/f9/37/10f937f2267cc07df2465b6d77b2973a.jpg" alt="Tweety" />
      <Avatar sx={{bgcolor:"crimson"}}>BW</Avatar>
      <Avatar sx={{backgroundColor:"indigo"}}>CS</Avatar>
      </AvatarGroup>
    </Stack>
  );
}
export default ImageAvatars;