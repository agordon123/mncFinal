import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
// needs to check to see if user is admin and if they are, show the admin page
// need a component to edit any user profile
// need a component to view the audit log
// need a component to Add and edit listings, and a component to view all listings
//need to upload pictures to go with listings

const AdminPage = () => {
  


  return (
    <Stack className="admin-container" component="div" direction="column">
 
    </Stack>
  );
};

AdminPage.propTypes = {
  currentUser: PropTypes.object,
};
export default AdminPage;
