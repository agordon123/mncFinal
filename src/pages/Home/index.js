import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import {HomeTop} from '../../components/Home/HomeTop';
export const HomePage = ({children}) => {
    return (
            <Stack
      component="div"
      direction="column"
      className="home__page"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5%",
        spaceBetween: "2%",
      }}
        >
            <HomeTop />
        </Stack>
    );
}