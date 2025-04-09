import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { useState, useEffect } from 'react';

function App() {
  const [location, setLocation] = useState(null);
  const [geoError, setGeoError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Save the location (latitude and longitude) in state
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setGeoError(null);
        },
        (error) => {
          // If the user denies permission or an error occurs, capture the error
          setGeoError(error.message);
        }
      );
    } else {
      setGeoError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home location={location} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;