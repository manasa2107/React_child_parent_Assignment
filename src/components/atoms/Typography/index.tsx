import * as React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

// const Types =()=> {
//   return (
//     <Box>
//       <Typography variant="h2" gutterBottom> h2. Heading </Typography>
//       <Typography variant="h6" gutterBottom>  h6. Heading </Typography>
//       <Typography variant="subtitle1" gutterBottom>subtitle1.  Hello </Typography>
//       <Typography variant="subtitle2" gutterBottom>  subtitle2. Welcome  </Typography>
//       <Typography variant="body1" gutterBottom>  body1. Lorem ipsum  </Typography>
//       <Typography variant="body2" gutterBottom> body2. Lorem ipsum dolor   </Typography>
//       <Typography variant="button" display="block" gutterBottom> button text  </Typography>
//       <Typography variant="caption" display="block" gutterBottom> caption text</Typography>
//       <Typography variant="overline" display="block" gutterBottom>  overline text </Typography>
//     </Box>
//   );
// }
// export default Types;


interface TypoProps {
  typoVariant?: TypographyProps["variant"],
  typoName:string,
 typoSx?: React.CSSProperties,
}
const Typography1 =({...props}:TypoProps)=> {
   return (
<Typography variant={props.typoVariant} sx={props.typoSx}>{props.typoName}</Typography>
   );
}
export default Typography1;