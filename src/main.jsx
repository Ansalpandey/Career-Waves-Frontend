import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import CreateNewPassword from "./pages/CreateNewPassword";
import AuthCode from "./pages/AuthCode";
import { UserProvider } from "./contexts/UserContext";
import "./styles/index.css";
import ContactUsPage from "./pages/ContactUs";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main App with all sections
  },
  {
    path: "/courses",
    element: <Courses />, // Courses page
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/CreateNewPassword",
    element: <CreateNewPassword />,
  },
  {
    path: "/AuthCode",
    element: <AuthCode />,
  },
  {
    path: "/contactus",
    element: <ContactUsPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </UserProvider>
);
