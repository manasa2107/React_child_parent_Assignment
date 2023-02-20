import React from "react";
import { Divider, Typography, TypographyProps } from "@mui/material";

interface DivProps {
    typo1Variant?: TypographyProps["variant"],
    typo1Name:string,
   typo1Sx : React.CSSProperties,
   typo2Name:string,
   typo2Sx : React.CSSProperties,
    divSx : React.CSSProperties,
}

const Textdivider1 =({...props}:DivProps)=>{
    return (
        <div style={{display: 'flex',flexWrap: 'wrap'}}>
        <Typography variant={props.typo1Variant} sx={props.typo1Sx}> {props.typo1Name} </Typography>
        <Divider sx={props.divSx}/>
        <Typography sx={props.typo2Sx}> {props.typo2Name} </Typography>
        </div>
    );
}
export default Textdivider1;