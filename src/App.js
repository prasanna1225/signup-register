import React from "react";
import "./App.css";
import Page57 from "./Pages/Page57";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Page19 from "./Pages/Page19";
import Page58 from "./Pages/Page58";
import Page59 from "./Pages/Page59";
import Page60 from "./Pages/Page60";
import Page61 from "./Pages/Page61";
import Page20 from "./Pages/Page20";
import Imac211 from './Pages/Imac211';
import Page68 from "./Pages/Page68";
import Page69 from "./Pages/Page69";
import Page26_27 from "./Pages/Page26_27";
import Page1 from "./Pages/Page1";
import Login from "./Pages/Login/index";
import Signup from "./Pages/Signup/index";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Page18 from "./Pages/Page18";
import Otp from "./Pages/Otp/index";
import Leaderboard from "./Pages/Leaderboard/index";
import Cardbody from "./Components/Cardbody";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/page57" element={<Page57 />} />
          <Route path="/page58" element={<Page58 />} />
          <Route path="/page59" element={<Page59 />} />
          <Route path="/page60" element={<Page60 />} />
          <Route path="/page61" element={<Page61 />} />
          <Route path="/page19" element={<Page19 />} />
          <Route path="/page20" element={<Page20 />} />
          <Route path="/Page18" element={<Page18 />} />
          <Route path='/imac211' element={<Imac211 />} />
          <Route path="/page68" element={<Page68 />} />
          <Route path="/page69" element={<Page69 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page26" element={<Page26_27 type={1}/>} />
          <Route path="/page27" element={<Page26_27 type={2}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
            
        </Routes>
        <Cardbody/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
