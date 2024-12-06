import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import MainLayout from "./components/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./privetRoute/PrivateRoute.jsx";
import AddReview from "./pages/AddReview.jsx";
import AllReviews from "./pages/AllReviews.jsx";
import ReviewDetails from "./pages/ReviewDetails.jsx";
import MyReviews from "./pages/MyReviews.jsx";
import UpdateReview from "./pages/UpdateReview.jsx";
import GameWatchlist from "./pages/GameWatchlist.jsx";
import ThemeProvider from "./ThemeProvider/ThemeProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <ThemeProvider>
            <Home />
          </ThemeProvider>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews",
        element: <AllReviews />,
      },
      {
        path: "/reviewsDetails/:id",
        element: (
          <PrivateRoute>
            <ReviewDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview></UpdateReview>,
      },
      {
        path: "/watchlist",
        element: <GameWatchlist></GameWatchlist>,
      },
      {
        path:'/404',
        element:<NotFound></NotFound>
      },
      {
        path: "*",
        element: <Navigate to="/404"></Navigate>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
