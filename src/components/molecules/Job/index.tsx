import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
const Job =()=> {
    return (
        <>
        <Box sx={{width:400,ml:10,border:"2px solid black"}}>
        <Box sx={{display:"flex",alignItems:"center", flexWrap:"wrap", mb:2}}>
    <Avatar sx={{width:50,height:40,ml:1}}>M</Avatar>
    <Stack sx={{pl:3}}>
        <Typography variant="h6"> User Experience Designer</Typography>
        <Typography variant="caption">Myntra</Typography>
        <Typography variant="caption">Hitech city, Hyderabad-500072</Typography>
        <Typography variant="caption"> 2 days ago</Typography>
    </Stack>
    </Box>
    <Button variant="outlined" color="success" size="small" sx={{ml:11,width:80,borderRadius:1,textTransform:"none"}}> Save</Button>
    <Button variant="contained" color="success" size="small" sx={{ml:3,width:100,borderRadius:1,textTransform:"none"}}>Apply</Button>
    <Divider sx={{mt:4}}></Divider>
    <Typography>Description</Typography>
    <Typography variant="body1" sx={{mb:4,color:"slategrey"}}> Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on variety of projects.</Typography>
    <Typography>About the Company</Typography>
    <Typography variant="body1" sx={{color:"slategrey",mb:4}}> High level of proficiency with leading UX design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite Products.</Typography>
    <Stack direction={"row"}>
<Typography sx={{color:"slategrey"}}>Excellent written and oral communication and presentation skills</Typography>
<Button variant="text" sx={{color:"green",mb:4}}>SEE MORE</Button>
</Stack>
<Stack direction={"row"} sx={{boxShadow:3}}>
<Typography variant="subtitle1" sx={{color:"green"}}>Green Commute Routes</Typography>
<Avatar sx={{ml:3, width:20,height:20}}>-</Avatar>
</Stack>
</Box>
    </>
    );
}
export default Job;