import React from "react";
import { useHistory, useNavigate, Route, Routes } from "react-router-dom";
import { useAuth, AuthContext } from "./firebase";
import { Navbar } from "./components/Misc/Navbar";
import { HomePage } from "./pages/Home";
import { AdminDashboard } from './pages/Admin';
import { AuthPage } from "./pages/Auth";
import { AccountPage } from "./pages/Account";
import {ListingPage} from "./pages/Listing";
import ContactPage from "./pages/Contact";

export const App = () => {
    const [ user, setUser ] = useAuth();
    return (
      <div className="App">
        <Navbar  />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route
            path="/reset-password"
            element={<AuthPage title={"Password Reset"} />}
          />
          <Route path="/login" element={<AuthPage title="Login" />} />
          <Route path="/register" element={<AuthPage title="Register" />} />
          <Route path="/listings" element={<ListingPage />} />
          <Route
            path="/create-profile"
            element={<AuthPage title="New User Profile" />}
          />
        </Routes>
      </div>
    );
}