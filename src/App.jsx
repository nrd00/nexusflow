import { useState } from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex">
                <Sidebar isCollapsed={isCollapsed} />
                <div className="container">
                  <Navigation toggleSidebar={toggleSidebar} />
                  <Outlet />
                </div>
              </div>
            }
          >
            <Route index element={<div>Nexusflow Home</div>} />
            <Route path="dashboard" element={<div>Dashboard</div>} />
            <Route path="stocks" element={<div>Stocks</div>} />
            <Route path="wishlist" element={<div>Wishlist</div>} />
            <Route path="portfolio" element={<div>Portfolio</div>} />
            <Route path="settings" element={<div>Settings</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
