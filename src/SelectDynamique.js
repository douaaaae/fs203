import React, { useState } from 'react';
/*function CitySelect() {
 const [selectedCity, setSelectedCity] = useState('');
 const [cities, setCities] = useState(['Paris', 'London', 'New York']);
 const handleCityChange = (e) => {
 setSelectedCity(e.target.value);
 };
 const addCity = () => {
 setCities([...cities, 'Tokyo']); // Ajout de la ville "Tokyo"
 };
 return (
 <div>
 <h3>Select your city:</h3>
 <button onClick={addCity}>Add Tokyo</button>
 <select value={selectedCity} onChange={handleCityChange}>
 {cities.map((city, index) => (
 <option key={index} value={city}>
 {city}
 </option>
 ))}
 </select>
 <p>Selected City: {selectedCity}</p>
 </div>
 );
}
export default CitySelect;*/

import './CitySelect.css'; 

function CitySelect() {
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState(['Paris', 'London', 'New York']);
  const [ville, setVille] = useState('');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const addCity = () => {
    if (ville.trim()) {
      setCities([...cities, ville.trim()]);
      setVille(''); // Clear the input after adding
    }
  };

  return (
    <div className="city-select-container">
      <div className="form-group">
        <label htmlFor="city-input">Enter a city:</label>
        <input
          type="text"
          id="city-input"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          placeholder="Type a city name"
        />
        <button onClick={addCity} className="add-city-button">
          Add City
        </button>
      </div>

      <div className="form-group">
        <label htmlFor="city-select">Select a city:</label>
        <select
          id="city-select"
          value={selectedCity}
          onChange={handleCityChange}
          className="city-dropdown"
        >
          <option value="" disabled>
            -- Choose a city --
          </option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <p className="selected-city">
        Selected City: <span>{selectedCity || 'None'}</span>
      </p>
    </div>
  );
}

export default CitySelect;
