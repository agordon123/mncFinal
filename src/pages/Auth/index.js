import React, { useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {  Box } from "@mui/material";
import { LoginForm } from "../../components/Authentication/LoginForm";
import { RegisterForm } from "../../components/Authentication/RegisterForm";
import { NewUserProfile } from "../../components/Authentication/NewUserProfile";
import { getDownloadURL, ref } from "firebase/storage";
import "./styles.css";
import PropTypes from "prop-types";

import MNCLogo from "../../components/Misc/MNCLogo";
export const AuthPage = ({ title }) => {
  const navigate = useNavigate();


  const handleFormRender = (title) => {
    if (title === "Login") {
      return <LoginForm title={title} />;
    }
    if (title === "Register") {
      return <RegisterForm title={title} />;
    }
    if (title === "New User Profile") {
      return <NewUserProfile title={title} />;
    }
  };

  useEffect(() => {

    handleFormRender(title);
  });

  return (
    <Box
      className="auth-page"
      style={{ display: "flex", flexDirection: "column", width: "100%", mt: 8 }}
    >
      <MNCLogo />
      {handleFormRender(title)}
    </Box>
  );
};

AuthPage.propTypes = {
  title: PropTypes.string,
};
AuthPage.defaultProps = {
  title: "Login",
};

export default AuthPage;
