import { useState } from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Dashboard from "./Pages/Dashboard";
import Stocks from "./Pages/Stocks";
import WishList from "./Pages/WishList";
import Portfolio from "./Pages/Portfolio";
import AuthForm from "./Components/AuthForm";

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
              <div className="flex min-h-screen">
  {/* Sidebar space */}
  <div
    className={`
      shrink-0
      transition-all
      duration-300
      ${isCollapsed ? "w-26" : "w-64"}
    `}
  />

  
  <Sidebar isCollapsed={isCollapsed} />

 
  <div className="min-w-0 flex-1">
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
            <Route path="signup" element={<AuthForm mode="signup"/>} />
            <Route path="/login" element={<AuthForm mode="login" />} />
            <Route path="/reset-password" element={<AuthForm mode="reset" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
