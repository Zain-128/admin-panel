import { useState, Suspense, lazy } from "react"; // Import Suspense and lazy
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import Error404 from "./pages/Error404";
import Loader from "./components/Loader";

const Login = lazy(() => import("./pages/Login"));
const Main_DashBoard = lazy(() => import("./pages/Main_DashBoard"));
const HQ_Management = lazy(() => import("./pages/HQ_Management"));
const Staff_Management = lazy(() => import("./pages/Staff_Management"));
const Branch_Management = lazy(() => import("./pages/Branch_Management"));
const Settings = lazy(() => import("./pages/Settings"));
const Add_Branch = lazy(() => import("./pages/Add_Branch"));

function App() {
  return (
    <Box
      sx={{ backgroundColor: "#F4F7FE", minHeight: "100vh", width: "100vw" }}
    >
      <CssBaseline />
      <BrowserRouter>
        <Sidebar />
        <Box
          sx={{
            marginLeft: "250px",
            marginTop: "100px",
            paddingX: 8,
          }}
        >
          {/* Wrap your Routes with Suspense */}
          <Suspense fallback={<Loader />}>
            <Routes>
              {/* Define your routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Main_DashBoard />} />
              <Route path="/hq_management" element={<HQ_Management />} />
              <Route path="/staff_management" element={<Staff_Management />} />
              <Route
                path="/branch_management"
                element={<Branch_Management />}
              />
              <Route path="/settings" element={<Settings />} />
              <Route path="/add_branch" element={<Add_Branch />} />
              <Route path="/*" element={<Error404 />} />
            </Routes>
          </Suspense>
          <Footer />
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
