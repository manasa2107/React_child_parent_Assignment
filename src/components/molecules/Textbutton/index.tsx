import React from "react";
import { Button, ButtonProps, Stack, Typography, TypographyProps } from "@mui/material";
interface TextProps {
    buttonVariant : ButtonProps ["variant"],
    buttonName : string,
    typoVariant: TypographyProps["variant"],
    typoName:string,
   typoSx : React.CSSProperties,
   buttonSx:React.CSSProperties,
}

const TextButton1 =({...props}:TextProps)=> {

    return (
<Stack component="span" 
sx={{
    border:'2px solid whitesmoke',
    mx:3,
    height:60,
    borderRadius:1,
}}>
<Typography variant={props.typoVariant} sx={props.typoSx}>{props.typoName}</Typography>
    <Button variant={props.buttonVariant} sx={props.buttonSx}>
        {props.buttonName}</Button>
</Stack>
    );
}

export default TextButton1;