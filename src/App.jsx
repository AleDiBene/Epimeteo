import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import RecentLocation from "./components/RecentLocation.jsx";
import Footer from "./components/Footer.jsx";
import SearchLocation from "./components/Search.jsx";

function App() {
  return (
    <>
      <Navbar />
      <RecentLocation />
      <SearchLocation />
      <Footer />
    </>
  );
}

export default App;
