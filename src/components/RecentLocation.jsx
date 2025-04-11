import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function WeatherComponent() {
  const cities = ["rome", "paris", "london"];
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const responses = await Promise.all(
          cities.map((city) =>
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=778e096865db2c5853526e3d719a78c9&units=metric`
            )
          )
        );
        const data = await Promise.all(responses.map((res) => res.json()));
        setWeatherData(data);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };

    fetchWeatherData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Row className="p-5 bg-light justify-content-center g-0">
      <h1 className="text-center w-100">Recenti</h1>
      {weatherData.map((cityData, index) => (
        <Col
          key={index}
          sm={12}
          md={4}
          className="d-flex justify-content-center align-items-center mb-4"
        >
          <Card className="px-5 text-center w-50">
            <Card.Img
              variant="top"
              src={`https://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`}
              alt={cityData.weather[0].description}
            />
            <Card.Body>
              <Card.Title className="fw-bold">{cityData.name}</Card.Title>
              <Card.Text>Temperature: {cityData.main.temp}°C</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default WeatherComponent;
