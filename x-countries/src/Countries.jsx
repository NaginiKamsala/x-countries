import CountryCard from "./CountryCard/CountryCard";
import { useState, useEffect } from "react";

const Countries = () => {
  const API_URL = "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setcountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {countries.map((country) => (
        <CountryCard cname={country.name} cimage={country.flag} />
      ))}
    </div>
  );
};

export default Countries;
