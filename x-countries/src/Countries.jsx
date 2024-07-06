import CountryCard from "./CountryCard/CountryCard";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./index.css";
import { unstable_createMuiStrictModeTheme } from "@mui/material";

const Countries = () => {
  const API_URL = "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setcountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setcountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="countries">
      <div>
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredCountries.map((country) => (
          <CountryCard cname={country.name} cimage={country.flag} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
