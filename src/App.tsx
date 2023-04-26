import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Menubar from "./components/Menubar";
import MainSection from "./components/MainSection";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="max-w-[1920px] w-[100%] mx-auto">
      <Navbar />
      <div className="flex justify-between h-[calc(100vh-86px)]">
        <Menubar />
        <MainSection />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
