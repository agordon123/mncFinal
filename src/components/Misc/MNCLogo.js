import React, { useEffect, useState } from "react";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { getDownloadURL, ref as reff } from "firebase/storage";
import { storage } from "../../firebase";

const style = {
  justifyContent: "center",
  alignItems: "center",
  padding: "100px",
};
export const MNCLogo = () => {
  const reference = reff(storage, "images/mncdevelopmentlogo.jpg");

  const [logo, setLogo] = useState("");

  const DownloadURL = async () => {
    await getDownloadURL(reference).then((url) => {
      setLogo(url);
    });
  };
  useEffect(() => {
    DownloadURL();
  });
  return (
    <React.Fragment>
      <img src={logo} alt="logo" id="logo" />
    </React.Fragment>
  );
};
export default MNCLogo;
