import React, { useEffect, useState } from "react";
import Contact from "../../components/Contact/Contact";
import ContactForm from "../../components/Contact/ContactForm";
import MNCLogo from "../../components/Misc/MNCLogo";
import { Footer } from "../../components/Misc/Footer";
import { auth, db } from "../../firebase";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";
import { useHistory, useNavigate } from "react-router-dom";

const ContactPage = () => {
  useEffect(() => {});
  return (
    <Stack
      className="contact-container"
      component="div"
      sx={{
        marginTop: "5%",
        marginLeft: "10%",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MNCLogo />
      <ContactForm />
      <Footer />
    </Stack>
  );
};
export default ContactPage;