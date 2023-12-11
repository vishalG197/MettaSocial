import React, { useState, useEffect } from "react";
import axios from "axios";
import Cardlist from "./Cardlist";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm == "") {
          const response = await axios.get(
            `https://restcountries.com/v3.1/all`
          );
          setCountries(response.data);
        } else {
          const response = await axios.get(
            `https://restcountries.com/v3.1/currency/${searchTerm}`
          );
          setCountries(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍 Enter currency code"
        class="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Cardlist countries={countries} />
    </div>
  );
};

export default Search;
