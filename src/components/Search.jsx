import { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function SearchLocation() {
  const [locationValue, setLocationValue] = useState(""); // stato per gestire il valore dell'input
  const [weatherData, setWeatherData] = useState(null); // stato per memorizzare i dati meteo
  const [error, setError] = useState(null); // stato per gestire eventuali errori

  const handleChange = (e) => {
    setLocationValue(e.target.value);
  };

  const handleSearch = async () => {
    if (!locationValue) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locationValue}&appid=778e096865db2c5853526e3d719a78c9&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError("Failed to fetch data");
      setWeatherData(null);
    }
  };

  return (
    <>
      <Row className="d-flex justify-content-center align-items-center mb-4 py-5 g-0">
        <h1 className="fw-bold text-center">Che tempo fa a..?</h1>
        <Col sm={12} md={4} className="d-flex justify-content-center">
          <Form.Control
            type="text"
            value={locationValue}
            onChange={handleChange}
            placeholder="Inserisci la località"
          />
          <Button className="mx-3" onClick={handleSearch}>
            Cerca
          </Button>
        </Col>
      </Row>
      {error && <p>{error}</p>}
      {weatherData && (
        <Row className="g-0 justify-content-center align-items-center mb-4">
          <Col sm={12} md={4} className="text-center"></Col>
          <Col
            sm={12}
            md={4}
            className="text-center bg-primary text-white p-3 rounded-pill"
          >
            <h3>{weatherData.name}</h3>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>{weatherData.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
            />
          </Col>
          <Col sm={12} md={4} className="text-center"></Col>
        </Row>
      )}
    </>
  );
}

export default SearchLocation;
