import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar for navigation
import Home from './components/Home'; // Import Home component
import Search from './components/Search'; // Import Search component
import Transport from './components/Transport'; // Import Transport component
import MyAccount from './components/MyAccount'; // Import MyAccount component
import About from './components/About'; // Import About component
import Login from './components/Login'; // Import Login component
import Register from './components/Register'; // Import Register component
import Payment from './components/Payment'; // Import Payment component
import Receipt from './components/Receipt'; // Import Receipt component
import { UserProvider } from './UserContext'; // Import UserProvider

function App() {
  return (
    <UserProvider> {/* UserProvider should wrap the whole app */}
      <Router> {/* Router should wrap the app's routes */}
        <div className="App">
          <Navbar /> {/* The Navbar will be present on all pages */}
          <main>
            <Routes>
              {/* Define routes for all the pages */}
              <Route path="/" element={<Home />} /> {/* Home page */}
              <Route path="/search" element={<Search />} /> {/* Search page */}
              <Route path="/transport" element={<Transport />} /> {/* Transport page */}
              <Route path="/myaccount" element={<MyAccount />} /> {/* My Account page */}
              <Route path="/about" element={<About />} /> {/* About page */}
              <Route path="/login" element={<Login />} /> {/* Login page */}
              <Route path="/register" element={<Register />} /> {/* Register page */}
              <Route path="/payment" element={<Payment />} /> {/* Payment page */}
              <Route path="/receipt" element={<Receipt />} /> {/* Receipt page */}
            </Routes>
          </main>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
