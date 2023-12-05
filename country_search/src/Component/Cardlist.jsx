
import React from 'react';
import Card from './Card';
import './Cardlist.css';

const CardList = ({ countries }) => {
  console.log(countries)
  return (
    <div >
      {countries.length==0?<p className="no-data">No data found</p>:<div className="card-list"> {countries.map((country) => (
        <Card key={country.cca2} name={country.name.common} capital={country.capital} countryCode={country.cca2} />
      ))}  </div>}

    </div>
  );
};

export default CardList;
