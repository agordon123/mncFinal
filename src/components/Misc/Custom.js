import styled from "@mui/material/styles";
import React, { useState, useEffect, forwardRef, useRef } from "react";
import Button from "@mui/material/Button";

export const CustomButton = ({ title, handleAction }) => {
  return (
    <Button variant="contained" onClick={handleAction}>
      {title}
    </Button>
  );
};








export default CustomButton;
