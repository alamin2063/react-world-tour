import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries,setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);

    useEffect(()=> {
            fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[]);

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }
    

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca2}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            
            
            <div className='countries'>
            {
                countries.map(country => <Country key={country.altSpellings[0]} handleVisitedCountry={handleVisitedCountry} country ={country} ></Country>)
            } 
            </div>
        </div>
    );
};

export default Countries;