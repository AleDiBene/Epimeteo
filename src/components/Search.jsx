import { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function SearchLocation() {
  const [locationValue, setLocationValue] = useState(""); // stato per gestire il valore dell'input
  const [weatherData, setWeatherData] = useState(null); // stato per memorizzare i dati meteo
  const [error, setError] = useState(null); // stato per gestire eventuali errori
  const navigate = useNavigate(); // Hook per la navigazione

  const handleChange = (e) => {
    setLocationValue(e.target.value); // Aggiorna il valore dell'input
  };

  const handleSearch = async () => {
    if (!locationValue) return; // Se non c'è alcun valore di località, non fare nulla

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locationValue}&appid=778e096865db2c5853526e3d719a78c9&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json(); // Parse i dati JSON
      setWeatherData(data); // Memorizza i dati meteo

      // Naviga alla pagina CityDetails passando i dati tramite stato
      navigate("/city-details", { state: { weatherData: data } });
    } catch (err) {
      setError("Failed to fetch data"); // Gestisce gli errori
      setWeatherData(null); // Resetta i dati meteo
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
            onChange={handleChange} // Gestisce il cambiamento dell'input
            placeholder="Inserisci la località"
          />
          <Button className="mx-3" onClick={handleSearch}>
            Cerca
          </Button>
        </Col>
      </Row>
      {error && <p>{error}</p>} {/* Mostra l'errore, se c'è */}
    </>
  );
}

export default SearchLocation;
