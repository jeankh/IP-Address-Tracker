import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import Location from './components/Location';
import Map from './components/Map';
import { Helmet } from 'react-helmet';

function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');

  const [latitude, setLatitude] = useState('37.40599');
  const [longitude, setLongitude] = useState('-122.078514');

  useEffect(() => {
    async function fetchUserIp() {
      try {
        const response = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_xzZpxlhISuftO4eLpk50F6q2xICpV');
        const data = await response.json();
        setIpAddress(data.ip);
        setLocation(`${data.location.city}, ${data.location.country}`);
        setTimezone(`GMT${data.location.timezone}`);
        setIsp(data.isp);
        setLatitude(data.location.lat);
        setLongitude(data.location.lng);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    }

    fetchUserIp();
  }, []);

  // Function to update data when user submits input
  const handleSearch = async (newIpAddress) => {
    try {
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_xzZpxlhISuftO4eLpk50F6q2xICpV&ipAddress=${newIpAddress}`);
      const data = await response.json();
      setIpAddress(data.ip);
      setLocation(`${data.location.city}, ${data.location.country}`);
      setTimezone(`GMT${data.location.timezone}`);
      setIsp(data.isp);
      setLatitude(data.location.lat);
      setLongitude(data.location.lng);
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };

  return (
    <div className='ip-app'>
      <Helmet>
        <meta name='author' content='Jean KHOGE' />
        <meta name='description' content='A simple IP address finder' />
        <meta name='keywords' content='ip address, location, timezone, isp' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Hamlet_by_Henry_Fuseli.jpg/1200px-Hamlet_by_Henry_Fuseli.jpg' />
        <meta charset='utf-8' />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='Web site created using create-react-app' />
        <link rel='apple-touch-icon' href='%PUBLIC_URL%/logo192.png' />
        <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
        <title>IP Address Tracker</title>
      </Helmet>
        <div className='content'>
          <Search handleSearch={handleSearch} />
          <Location ipAddress={ipAddress} location={location} timezone={timezone} isp={isp} />
          <Map latitude={latitude} longitude={longitude} />
        </div>
        <footer>
          <p>© 2023 Jean KHOGE</p>
        </footer>
      </div>
  );
}

export default App;
