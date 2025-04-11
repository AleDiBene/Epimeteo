import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import RecentLocation from "./components/RecentLocation.jsx";
import Footer from "./components/Footer.jsx";
import SearchLocation from "./components/Search.jsx";
import Caorusel from "./components/Caorusel.jsx";

function App() {
  return (
    <>
      <Navbar />
      <RecentLocation />
      <SearchLocation />
      <Caorusel />
      <Footer />
    </>
  );
}

export default App;
