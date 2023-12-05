// CardList.js
import React from 'react';
import Card from './Card';
import './Cardlist.css';

const CardList = ({ countries }) => {
  console.log(countries)
  return (
    <ul className="card-list">
      {countries.map((country) => (
        <Card key={country.cca2} name={country.name.common} capital={country.capital} countryCode={country.cca2} />
      ))}
    </ul>
  );
};

export default CardList;
