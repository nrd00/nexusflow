import { useState } from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Dashboard from "./Pages/Dashboard";
import Stocks from "./Pages/Stocks";
import WishList from "./Pages/WishList";
import Portfolio from "./Pages/Portfolio";

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
                <div className="w-full">
                  <Navigation toggleSidebar={toggleSidebar} />
                  <main className="bg-[#F8FAFE] py-5">
                    <div className="container">
                      <Outlet />
                    </div>
                  </main>
                </div>
              </div>
            }
          >
            <Route index element={<div>Nexusflow Home</div>} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="stocks" element={<Stocks />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="login" element={<div>Login</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
