import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Divider, Stack } from "@mui/material";
import DividerTag from "../atoms/Divider";
import TextButton1 from "../molecules/Textbutton";
import Slider1 from "../atoms/Slider";
import Typography1 from "../atoms/Typography";
import Textdivider1 from "../molecules/Textdivider";
import AvatarText1 from "../molecules/Avatartext";
import theme from "../../theme";
import Statemgmnt from "../organism/Statemanagement";

const Parentchild = () => {
  const [isClicked, setIsToggled] = React.useState(false);
  return (
    <Box>
      <Stack
        component="span"
        sx={{
          border: "2px solid whitesmoke",
          mx: 50,
          height: 250,
          borderRadius: 1,
          mt: 5,
        }}
      >
        <Typography variant="subtitle1" gutterBottom sx={{ pl: 2 }}>
          Amount details
        </Typography>
        <TextButton1
          buttonVariant={"outlined"}
          buttonName={"Buy Max"}
          typoVariant={"h6"}
          typoName={"$34,000.00"}
          typoSx={{ paddingLeft: 3, paddingTop: 2 }}
          buttonSx={{
            color: "theme.palette.primary.main",
            fontWeight: "bold",
            maxWidth: 100,
            position: "absolute",
            marginLeft: 63,
            marginTop: 1.4,
            textTransform: "none",
          }}
        />

        {/* <Slider1 value={value} handleChange={handleChange} /> */}
        <Slider1 />
        <TextButton1
          buttonVariant={"text"}
          buttonName={"BTC"}
          typoVariant={"h6"}
          typoName={"0.0234510"}
          typoSx={{ paddingLeft: 3, paddingTop: 1.5 }}
          buttonSx={{
            marginLeft: 68,
            position: "absolute",
            marginTop: 1,
            color: "grey",
            fontWeight: "bold",
          }}
        />
      </Stack>

      <Box
        sx={{
          boxShadow: 1,
          ml: 50,
          mt: 2,
          width: "670px",
          height: "500px",
          borderColor: "whitesmoke",
          borderLeft: 1,
          borderLeftColor: "whitesmoke",
          borderBottom: 1,
          borderBottomColor: "whitesmoke",
        }}
      >
        <Typography1
          typoVariant={"body2"}
          typoName={"You are buying"}
          typoSx={{
            color: "GrayText",
            textAlign: "center",
            fontWeight: "bold",
          }}
        />
        <Typography1
          typoVariant={"h6"}
          typoName={"0.0234510 BTC"}
          typoSx={{ textAlign: "center", paddingTop: 1 }}
        />
        <Typography1
          typoVariant={"body2"}
          typoName={"1BTC = $3,406,069.54"}
          typoSx={{
            color: "GrayText",
            textAlign: "center",
            paddingTop: 1,
            fontWeight: "bold",
            marginBottom: 2,
          }}
        />

        <Divider style={{ width: 670, marginBottom: 20 }} />
        <AvatarText1
          typo1Name={"Payment method"}
          typo2Name={"Visa Credit ...8845"}
        />
        <DividerTag />
        <AvatarText1 typo1Name={"Delivery fees"} typo2Name={"0.001 BTC"} />
        <DividerTag />
        <AvatarText1 typo1Name={"Deposit to "} typo2Name={"Bitcoin Wallet"} />

        <Divider style={{ width: 670, paddingTop: 15 }} />
        <Textdivider1
          typo1Name={"0.0234510 BTC"}
          typo1Sx={{
            paddingLeft: 3,
            paddingTop: 2,
            fontSize: "small",
            color: "GrayText",
          }}
          typo2Name={"$34,000.00"}
          typo2Sx={{
            paddingLeft: 1,
            paddingTop: 2,
            fontSize: "small",
            color: "GrayText",
          }}
          divSx={{
            borderStyle: "dashed",
            width: 450,
            marginBottom: 1,
            marginLeft: 1,
          }}
        />

        <Textdivider1
          typo1Name={"transaction fee"}
          typo1Sx={{
            paddingLeft: 3,
            paddingTop: 1,
            fontSize: "small",
            color: "GrayText",
          }}
          typo2Name={"$1,000.00"}
          typo2Sx={{
            paddingLeft: 1,
            paddingTop: 2,
            fontSize: "small",
            color: "GrayText",
          }}
          divSx={{
            borderStyle: "dashed",
            width: 460,
            marginBottom: 1,
            marginLeft: 1,
          }}
        />

        <Textdivider1
          typo1Name={"Total"}
          typo1Sx={{ paddingLeft: 3, paddingTop: 1, fontWeight: "bold" }}
          typo2Name={"$35,000.00"}
          typo2Sx={{ paddingLeft: 1, paddingTop: 1 }}
          divSx={{
            borderStyle: "dashed",
            width: 493,
            marginBottom: 1,
            marginLeft: 1,
          }}
          typo1Variant={"subtitle2"}
        />

        <Button
          variant="contained"
          sx={{
            width: 600,
            backgroundColor: theme.palette.secondary.main,
            mt: 2,
            mx: 5,
            height: 35,
          }}
          onClick={() => setIsToggled(!isClicked)}
        >
          Buy Now
        </Button>
        {isClicked ? <Statemgmnt /> : <p>Button is not clicked</p>}
      </Box>
    </Box>
  );
};

export default Parentchild;
