
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ name, capital, countryCode }) => {
  const getFlagUrl = (code) => `https://flagsapi.com/${code}/flat/64.png`;
  
  return (
    <li className="card">
      <img src={getFlagUrl(countryCode)} alt={name} className="flag-img" />
      <div>
        <h2>{name}</h2>
        <p>Capital: {capital}</p>
      </div>
    </li>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
};

export default Card;
