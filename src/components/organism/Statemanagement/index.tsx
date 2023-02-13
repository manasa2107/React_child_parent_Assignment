import React from "react";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { Avatar, Box, Button, Stack } from "@mui/material";
import Typography1 from "../../atoms/Typography";
const Statemgmnt =()=>
{
    return (
        <Box sx={{width:500,height:400,mt:20}} >
<Avatar sx={{backgroundColor:"beige",height:60,width:60,ml:27,mt:3}} >
<DoneOutlinedIcon sx={{color:"green",width:70,height:30}} />
</Avatar>
<Typography1 typoName={"0.0234510 BTC"} typoSx={{fontWeight:"bold",textAlign:"center",marginTop:3}} typoVariant={"h4"}></Typography1>
<Typography1 typoName={"Purchase is completed, please check your balance in your crypto wallet"} typoSx={{textAlign:"center",marginTop:3}} typoVariant={"body1"}></Typography1>
<Stack direction={"row"} sx={{mt:3}}>
<Button variant="outlined" sx={{width:150,height:50,ml:9,mr:5}}>BUY CRYPTO</Button>
<Button variant="contained" sx={{width:170}}>GO TO USD COIN </Button>
</Stack>
</Box>
    );
}

export default Statemgmnt;