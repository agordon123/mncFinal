import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { useAuth, AuthContext } from "../../firebase";
import { userSignOut } from "../../firebase";

export const Navbar = () => {
    const navigate = useNavigate();
    const history = useHistory();
    const user = useAuth();
      const pages = [
        {
          page: "/admin",
          text: "Administrator",
          onClickFunc: () => navigate("/admin", { state: { user: user } }),
          id: "admin-page",
        },
        {
          page: "/contact",
          text: "Contact",
          onClickFunc: () => navigate("/contact", { state: { user: user } }),
          id: "contact-page",
        },
        {
          page: "/listings",
          text: "Listings",
          onClickFunc: () => navigate("/listings", { state: { user: user } }),
          id: "listing-page",
        },
        {
          page: "/account",
          text: "Profile",
          onClickFunc: () => navigate("/account"),
          id: "account-page",
        },

        {
          page: "/",
          text: "Login/Register",
          onClickFunc: () => navigate("/login", { state: { user: user } }),
          id: "login-page",
        },
        {
          page: "/",
          text: "Logout",
          onClickFunc: () => {
            navigate("/", { state: { user: user } });
          },
          id: "logout",
        },
    ];
  return (
    <React.Fragment>
      <div className="global-navbar">
        <header></header>
      </div>
    </React.Fragment>
  );
}