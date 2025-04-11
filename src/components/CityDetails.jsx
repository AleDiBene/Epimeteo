import { useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function CityDetails() {
  const location = useLocation();
  const { weatherData } = location.state || {};

  if (!weatherData) {
    return <p>No weather data available</p>;
  }

  return (
    <>
      <Row className="bg-light d-flex justify-content-center align-items-center mb-4 py-5 g-0">
        <Col sm={12} md={4} className="text-center">
          <h1>Dettagli sulla città: {weatherData.name}</h1>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>{weatherData.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
          <p>Umidità: {weatherData.main.humidity}%</p>
          <p>Pressione: {weatherData.main.pressure} hPa</p>
          <p>Vento: {weatherData.wind.speed} m/s</p>
        </Col>
      </Row>
    </>
  );
}

export default CityDetails;
