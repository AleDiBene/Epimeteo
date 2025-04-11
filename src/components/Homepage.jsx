import { Carousel } from "react-bootstrap";
import RecentLocation from "../components/RecentLocation.jsx";
import SearchLocation from "../components/Search.jsx";
import CarouselHome from "../components/Carousel.jsx";

function Homepage() {
  return (
    <>
      <RecentLocation />
      <SearchLocation />
      <CarouselHome />
    </>
  );
}

export default Homepage;
