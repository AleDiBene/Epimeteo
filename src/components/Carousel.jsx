import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../components/ExampleCarouselImage";

function CarouselHome() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg/1200px-Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg"
            altText="Rome"
          />
          <Carousel.Caption>
            <h3>Rome</h3>
            <p>La fontana di trevi è nuovamente operativa!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ExampleCarouselImage
            imageSrc="https://www.ilgiornaledellarte.com/Uploads/Articles/45292/IMG202411291110054971.jpeg"
            altText="Paris"
          />
          <Carousel.Caption>
            <h3>Paris</h3>
            <p>Notre Dame è nuovamente operativa!.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ExampleCarouselImage
            imageSrc="https://www.earthtrekkers.com/wp-content/uploads/2023/02/London-Travel-Tips.jpg"
            altText="London"
          />
          <Carousel.Caption>
            <h3>London</h3>
            <p>Londra con Harry Potter</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
