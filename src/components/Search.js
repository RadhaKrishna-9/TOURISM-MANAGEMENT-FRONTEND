import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Search.css'; // Ensure your CSS for styling

// Updated list of tourism places including Indian destinations
const tourismPlaces = [
  {
    name: 'Eiffel Tower',
    description: 'An iconic symbol of Paris, offering breathtaking views.',
  },
  {
    name: 'Great Wall of China',
    description: 'A series of fortifications made of various materials.',
  },
  {
    name: 'Machu Picchu',
    description: 'An ancient Incan city set high in the Andes Mountains.',
  },
  {
    name: 'Statue of Liberty',
    description: 'A colossal neoclassical sculpture on Liberty Island in New York.',
  },
  {
    name: 'Taj Mahal',
    description: 'A magnificent marble mausoleum in Agra, India.',
  },
  {
    name: 'Qutub Minar',
    description: 'A towering minaret in Delhi, India, and a UNESCO World Heritage Site.',
  },
  {
    name: 'Red Fort',
    description: 'A historic fort in Delhi, a symbol of India’s rich history.',
  },
  {
    name: 'Gateway of India',
    description: 'A monumental archway located in Mumbai, built during British rule.',
  },
  {
    name: 'Hawa Mahal',
    description: 'The Palace of Winds in Jaipur, known for its beautiful facade.',
  },
  {
    name: 'Kerala Backwaters',
    description: 'A network of lagoons and lakes in Kerala, famous for its houseboats.',
  }
];

function Search() {
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleSearch = (e) => {
    e.preventDefault();
    if (filteredResults.length > 0) {
      const selectedDestination = filteredResults[0];
      console.log('Redirecting to booking for:', selectedDestination);
      navigate('/transport', { state: { destination: selectedDestination.name } });
    }
  };

  const handleInputChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery) {
      const results = tourismPlaces.filter((place) =>
        place.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  const handleSelectDestination = (place) => {
    console.log('Redirecting to booking for:', place);
    navigate('/transport', { state: { destination: place.name } });
  };

  return (
    <div className="search-page">
      <h1>Search for Tourist Attractions</h1>
      <form onSubmit={handleSearch}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Type your destination or attraction..."
            value={query}
            onChange={handleInputChange}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        
        {/* Display search suggestions below the input field */}
        {filteredResults.length > 0 && (
          <div className="search-suggestions">
            <ul>
              {filteredResults.map((place, index) => (
                <li key={index} onClick={() => handleSelectDestination(place)}>
                  <strong>{place.name}</strong> - {place.description}
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}

export default Search;
