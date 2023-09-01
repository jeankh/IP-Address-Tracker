import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
import L from 'leaflet';
import iconLocation from '../assets/icon-location.svg';

function Map({ latitude, longitude }) {
  const position = [latitude, longitude];
  const customIcon = new L.Icon({
    iconUrl: iconLocation,
  });

  // Generate a unique key based on latitude and longitude
  const mapKey = `${latitude}-${longitude}`;

  return (
    <div className='map'>
      <MapContainer
        center={position}
        zoom={17}
        style={{ width: '100%', height: '400px' }}
        key={mapKey} // Use the unique key to trigger re-render when latitude/longitude changes
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
