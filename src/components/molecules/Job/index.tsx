import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const Job =()=> {
    return (
        <>
        <Box sx={{width:420,ml:15,border:"2px solid whitesmoke",mt:5,borderRadius:4}}>
        <Box sx={{display:"flex",alignItems:"center", flexWrap:"wrap", mb:2,mt:3}}>
       <img src="myntra.png"  alt="myntra" height={40} width={40} style={{paddingLeft:20,marginBottom:30}}/>

    <Stack sx={{pl:3}}>
        <Typography variant="h6"> User Experience Designer</Typography>
        <Typography variant="caption">Myntra</Typography>
        <Typography variant="caption">Hitech city, Hyderabad-500072</Typography>
        <Typography variant="caption"> 2 days ago</Typography>
    </Stack>
    <Avatar sx={{ml:45,color:"black",backgroundColor:"Background",position:"absolute",mb:7}}>
    <MoreHorizOutlinedIcon/>
    </Avatar>
    </Box>
    <Button variant="outlined" color="success" size="small" sx={{ml:11,width:80,borderRadius:1,textTransform:"none"}}> Save</Button>
    <Button variant="contained" color="success" size="small" sx={{ml:3,width:100,borderRadius:1,textTransform:"none"}}>Apply</Button>
    <Divider sx={{mt:4}}></Divider>
    <Typography sx={{ml:2,mt:3}}>Description</Typography>
    <Typography variant="body1" sx={{mb:4,color:"slategrey",ml:2}}> Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on variety of projects.</Typography>
    <Typography sx={{ml:2}}>About the Company</Typography>
    <Typography variant="body1" sx={{color:"slategrey",mb:4,ml:2}}> High level of proficiency with leading UX design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite Products.</Typography>
    <Stack direction={"row"}>
<Typography sx={{color:"slategrey",ml:2}}>Excellent written and oral communication and presentation skills</Typography>
<Button variant="text" sx={{color:"green",mb:4}}>SEE MORE</Button>
</Stack>
<Stack direction={"row"} sx={{boxShadow:2,height:60}}>
<Typography variant="subtitle1" sx={{color:"green",ml:12,mt:2}}>Green Commute Routes</Typography>
<Avatar sx={{ml:3, width:20,height:20,color:"green",backgroundColor:"Background",mt:2.5}}>
<ArrowForwardIcon />
</Avatar>
</Stack>
</Box>
    </>
    );
}
export default Job;
