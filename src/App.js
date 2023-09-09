import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import Location from "./components/Location";
import Map from "./components/Map";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [latitude, setLatitude] = useState("37.40599");
  const [longitude, setLongitude] = useState("-122.078514");

  useEffect(() => {
    async function fetchUserIp() {
      try {
        const response = await fetch(
          "https://geo.ipify.org/api/v2/country,city?apiKey=at_xzZpxlhISuftO4eLpk50F6q2xICpV"
        );
        const data = await response.json();
        setIpAddress(data.ip);
        setLocation(`${data.location.city}, ${data.location.country}`);
        setTimezone(`GMT${data.location.timezone}`);
        setIsp(data.isp);
        setLatitude(data.location.lat);
        setLongitude(data.location.lng);
      } catch (error) {
        setErrorMessage(true);
      }
    }

    fetchUserIp();
  }, []);

  // Function to update data when user submits input
  const handleSearch = async (newIpAddress) => {
    try {
      setBtnDisable(true);
      setErrorMessage(false);
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_xzZpxlhISuftO4eLpk50F6q2xICpV&ipAddress=${newIpAddress}`
      );
      const data = await response.json();
      setIpAddress(data.ip);
      setLocation(`${data.location.city}, ${data.location.country}`);
      setTimezone(`GMT${data.location.timezone}`);
      setIsp(data.isp);
      setLatitude(data.location.lat);
      setLongitude(data.location.lng);
    } catch (error) {
      setErrorMessage(true);
    }
    setBtnDisable(false);
  };

  return (
    <div className="ip-app">
      <div className="content">
        <Search
          handleSearch={handleSearch}
          errorMessage={errorMessage}
          btnDisable={btnDisable}
        />
        <Location
          ipAddress={ipAddress}
          location={location}
          timezone={timezone}
          isp={isp}
        />
        <Map latitude={latitude} longitude={longitude} />
      </div>
      <footer>
        <p>
          © 2023{" "}
          <a
            href="https://www.linkedin.com/in/jean-khoge/"
            target="_blank"
            rel="noreferrer"
          >
            Jean KHOGE
          </a>{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
