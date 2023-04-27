import { BrowserView, MobileView } from "react-device-detect";

import "./App.css";

// import browser components
import Navbar from "./components/browser/Navbar";
import Menubar from "./components/browser/Menubar";
import MainSection from "./components/browser/MainSection";
import Sidebar from "./components/browser/Sidebar";

// import mobile components
import MNavbar from "./components/mobile/Navbar";
import Chart from "./components/mobile/Chart";
import MobileCarousel from "./components/mobile/MobileCarousel";

function App() {
  return (
    <>
      <BrowserView>
        <div className="max-w-[1920px] w-[100%] mx-auto">
          <Navbar />
          <div className="flex justify-between h-[calc(100vh-86px)]">
            <Menubar />
            <MainSection />
            <Sidebar />
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <MNavbar />
        <div className="mt-2 mx-3 mb-10">
          <Chart />
          <MobileCarousel />
        </div>
      </MobileView>
    </>
  );
}

export default App;
