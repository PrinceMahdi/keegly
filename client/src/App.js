/* < ------------ SCSS IMPORTS ------------> */
import "./App.scss";
/* < ------------ REACT IMPORTS ------------> */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
/* < ------------ COMPONENT IMPORTS ------------> */
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Footer from "./Components/Footer/Footer";
import Team from "./Pages/Team/Team";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
