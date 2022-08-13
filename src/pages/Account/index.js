
import React, { useEffect, useState, Container } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { db} from "../../firebase";
import {Box, Stack,} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { ProfileChange } from "../../components/Account/ChangeUserInfo";
import MyAvatar from "../../components/Account/Avatar";
//These components do not work
//import Profile from "../../components/AuditAccount/Profile";
//import SignOutBox from "../../components/AuditAccount/SignOutBox";
//import AccountPageDeleteProfileBox from "../../components/AuditAccount/DeleteAccount";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgb(196 196 196)" : "rgb(196 196 196)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

//need a profile edit component/form
//needs a component to display the profile automatically upon loading
export const AccountPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Stack className="account-page-container" component="div">
      <Box sx={{ paddingBottom: 10 }}>
        <h3>Welcome User</h3>
      </Box>
      <Box>
        <h3>User Info</h3>
        <MyAvatar></MyAvatar>
      </Box>
      <Box sx={{ paddingRight: 100 }}>
        <Item>
          <h1>Welcome!</h1>
          <h3>User Info</h3>
        </Item>
      </Box>
      <div></div>
      <Box sx={{ paddingRight: 100 }}>
        <Item>
          <IconButton>
            <Avatar
              src="/images/example.jpg"
              style={{
                margin: "10px",
                width: "50px",
                height: "50px",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </IconButton>
          <ProfileChange></ProfileChange>
        </Item>
      </Box>
    </Stack>
  );
};

export default AccountPage;
