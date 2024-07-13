import React, { useState } from 'react';
import './Country.css';

const Country = ({country,handleVisitedCountry}) => {
    console.log(country);
    const { name,flags,population,area,cca2,region,subregion,maps} = country;
    const [visited,setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags?.png} alt={name?.common} />
            <div>
            <button><a target='blank' href={maps.googleMaps
}>Map</a></button>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region} </p>
            <p>Subregion: {subregion}</p>
            <p>Currency:{} ({})</p>
            <p><small>Code: {cca2}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button> <br />
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            {visited ? 'I have Visited this country' : 'I have not visited this country'}
            </div>

        </div>
    );
};

export default Country;