import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Home.css'; // Ensure this CSS file has the appropriate styles

const tourismPlaces = [
  {
    name: 'Eiffel Tower',
    description: 'An iconic symbol of Paris, offering breathtaking views.',
    icon: 'fas fa-landmark',
    rating: 4.7,
  },
  {
    name: 'Great Wall of China',
    description: 'A series of fortifications made of various materials.',
    icon: 'fas fa-wall',
    rating: 4.5,
  },
  {
    name: 'Machu Picchu',
    description: 'An ancient Incan city set high in the Andes Mountains.',
    icon: 'fas fa-mountain',
    rating: 4.8,
  },
  {
    name: 'Statue of Liberty',
    description: 'A colossal neoclassical sculpture on Liberty Island in New York.',
    icon: 'fas fa-gift',
    rating: 4.6,
  },
  {
    name: 'Taj Mahal',
    description: 'A magnificent marble mausoleum in Agra, India.',
    icon: 'fas fa-archway',
    rating: 4.9,
  },
  {
    name: 'Qutub Minar',
    description: 'A towering minaret in Delhi, India, and a UNESCO World Heritage Site.',
    icon: 'fas fa-building',
    rating: 4.4,
  },
  {
    name: 'Red Fort',
    description: 'A historic fort in Delhi, a symbol of India’s rich history.',
    icon: 'fas fa-fort-awesome',
    rating: 4.3,
  },
  {
    name: 'Gateway of India',
    description: 'A monumental archway located in Mumbai, built during British rule.',
    icon: 'fas fa-archway',
    rating: 4.6,
  },
  {
    name: 'Hawa Mahal',
    description: 'The Palace of Winds in Jaipur, known for its beautiful facade.',
    icon: 'fas fa-wind',
    rating: 4.7,
  },
  {
    name: 'Kerala Backwaters',
    description: 'A network of lagoons and lakes in Kerala, famous for its houseboats.',
    icon: 'fas fa-water',
    rating: 4.8,
  },
  {
    name: 'Greenland',
    description: 'A vast island known for its stunning glaciers and natural beauty.',
    icon: 'fas fa-snowflake',
    rating: 4.9,
  },
  {
    name: 'Sahara Desert',
    description: 'The largest hot desert in the world, known for its vast dunes.',
    icon: 'fas fa-sun',
    rating: 4.5,
  },
  {
    name: 'Tropical Islands',
    description: 'A paradise of white sandy beaches and clear waters.',
    icon: 'fas fa-island',
    rating: 4.6,
  },
  {
    name: 'Snow Regions',
    description: 'Areas covered with snow, perfect for winter sports and activities.',
    icon: 'fas fa-snowflake',
    rating: 4.8,
  },
];

function Home() {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleBookingClick = () => {
    navigate('/transport'); // Redirect to the Transport module
  };

  return (
    <div className="home">
      <div className="logo-marquee">
        <div className="logo-container">
          {/* Original Logos */}
          <img src="http://pathwaytoaus.com/wp-content/uploads/2015/05/trav2.jpg" alt="Logo 1" className="scrolling-logo" />
          <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTV-India-Cover-Final.png" alt="Logo 2" className="scrolling-logo" />
          <img src="https://e0.pxfuel.com/wallpapers/115/893/desktop-wallpaper-collage-ast-240417b-ast-travel-tours-travel-and-tourism.jpg" alt="Logo 3" className="scrolling-logo" />
          <img src="https://getwallpapers.com/wallpaper/full/7/1/7/193375.jpg" alt="Logo 4" className="scrolling-logo" />
          <img src="http://www.pixelstalk.net/wp-content/uploads/2016/08/HD-World-Travel-Desktop-Background.jpg" alt="Logo 5" className="scrolling-logo" />
          <img src="https://dzt53h2bjh4s.cloudfront.net/wp-content/uploads/2017/05/20115738/Eiffel-Tower-Skyline-World-Travel-Wallpaper-HD-Images-Free-Download-7829809928.jpg" alt="Logo 6" className="scrolling-logo" />
          <img src="http://getwallpapers.com/wallpaper/full/f/2/6/1085331-new-world-beautiful-places-wallpapers-2048x1366-mac.jpg" alt="Logo 7" className="scrolling-logo" />
          <img src="https://wallpaperaccess.com/full/1318032.jpg" alt="Logo 8" className="scrolling-logo" />
          <img src="https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=PYs9JKctmfYj5VNwSQp5QcxHmaPsEGuYEIMT_rFM3ow=" alt="Logo 9" className="scrolling-logo" />
          <img src="https://images.unsplash.com/photo-1527605158555-853f200063e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D" alt="Logo 10" className="scrolling-logo" />
          <img src="https://wallpaperaccess.com/full/1566664.jpg" alt="Logo 11" className="scrolling-logo" />
          <img src="https://cdn.wallpapersafari.com/82/51/XO7mMf.jpg" alt="Logo 12" className="scrolling-logo" />
          
          <img src="https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Logo 13" className="scrolling-logo" />
          <img src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Logo 14" className="scrolling-logo" />
          <img src="https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Logo 15" className="scrolling-logo" />
          <img src="https://images.pexels.com/photos/1707310/pexels-photo-1707310.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Logo 16" className="scrolling-logo" />
          <img src="https://images.pexels.com/photos/3361480/pexels-photo-3361480.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Logo 17" className="scrolling-logo" />
          <img src="https://images.pexels.com/photos/258447/pexels-photo-258447.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Logo 18" className="scrolling-logo" />
          <img src="https://media.istockphoto.com/id/1132463451/photo/four-hands-with-mobile-phones-taking-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=mn1CwRSGdjkUanr9KxRRROGXZvAk8J6gRSY9xRr7w8g=" alt="Logo 19" className="scrolling-logo" />
        </div>
      </div>

      <h1 className="heading">Explore Popular Tourist Destinations</h1>
      <div className="tourism-places">
        {tourismPlaces.map((place, index) => (
          <div className={`place-card ${activeCard === index ? 'active' : ''}`} key={index} onClick={() => handleCardClick(index)}>
            <i className={place.icon}></i>
            <h2>{place.name}</h2>
            {activeCard === index && (
              <>
                <p>{place.description}</p>
                <p className="rating">Rating: {place.rating} ⭐</p>
                <button onClick={handleBookingClick}>Book Now</button>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="map-container animated fade-in">
        <h2>Explore Locations on the Map</h2>
        <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.0347550895736!2d80.62035801488263!3d16.44185161909545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a073957d%3A0xe79d66babc83e470!2sK%20L%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1617934020982!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>

      </div>
    </div>
  );
}

export default Home;
