import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import theme from "../../../theme";
//import Typography1 from "../../atoms/Typography";

interface AvatarProps {
    //typo1Variant: TypographyProps["variant"],
    typo1Name:string,
  // typo1Sx : React.CSSProperties,
   typo2Name:string,
}
const AvatarText1 =({...props}:AvatarProps)=>{
    return (
    //     <Box  sx={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>   
    //     <Avatar sx={{mt:1,ml:2,width:40,height:30,backgroundColor:"whitesmoke"}}>
    //    < CreditCardOutlinedIcon color="action" sx={{width:40,height:20}} />
    //     </Avatar>
    //     <Typography></Typography>
    //     {/* <Stack>
    //     <Typography variant={props.typo1Variant} sx={props.typo1Sx}> {props.typo1Name} </Typography>
    //     <Typography sx={props.typo2Sx}>{props.typo2Name}</Typography>
    //     </Stack>   */}
    //     </Box>
    <>
    <Box  sx={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}> 
    <Avatar sx={{ml:2,width:40,height:30,backgroundColor:"whitesmoke"}}>
    < CreditCardOutlinedIcon color="action" sx={{width:40,height:20}} />
    </Avatar>
    <Box >
    <Typography  variant="caption" sx={{paddingLeft:1,color:theme.palette.neutral?.main,fontFamily:theme.typography.caption.fontFamily}}> {props.typo1Name}</Typography>
    {/* <Typography1 typoSx={props.typo2Sx} typoName={props.typo2Name} />  */}
    <Typography sx={{pl:1,fontWeight:"bold",fontSize:"small"}}>{props.typo2Name}</Typography>
    </Box>
    </Box>
    </>
    );
}
export default AvatarText1;
