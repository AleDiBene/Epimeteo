import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Homepage from "./components/Homepage.jsx";
import CityDetails from "./components/CityDetails.jsx";
import RecentLocation from "./components/RecentLocation.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/city-details" element={<CityDetails />} />
        <Route path="/recenti-location" element={<RecentLocation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
