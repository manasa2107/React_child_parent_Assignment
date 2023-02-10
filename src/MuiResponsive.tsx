import {Box, Typography} from '@mui/material';
import {styled} from '@mui/material';
//import { fontFamily } from '@mui/system';

const StyledBox = styled(Box) (({ theme }) => ({
    height:'300px',
    width: '300px',
 //  backgroundColor: theme.palette.neutral?.main,
 // backgroundColor: theme.status.danger,
  // backgroundColor:theme.palette.neutral?.darker,
}))
const Content = styled(Typography) (({ theme}) => ({
     fontFamily: theme.typography.h4.fontFamily,
     fontSize: theme.typography.h4.fontSize,
 }))
export const MuiResponsive = () => {
    return (
        <>
        <Box
        sx={{
            height: '300px',
            width: {
                xs: 100,
                sm: 200,
                md:300,
                lg:400,
                xl:200,
            },
            bgcolor: 'success.main',
        }}
        ></Box>
     <Content> Hello welcome</Content> 
        <StyledBox />
        </>
    )
}