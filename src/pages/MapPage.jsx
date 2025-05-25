import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

const dataPoints = [
    { lat: 35.70, lng: 51.41, value: 29 },
  { lat: 35.71, lng: 51.39, value: 51 },
  { lat: 35.72, lng: 51.40, value: 75 },
  { lat: 35.73, lng: 51.42, value: 86 },
  { lat: 35.71, lng: 51.43, value: 33 },
  { lat: 35.69, lng: 51.40, value: 63 },
  { lat: 35.70, lng: 51.42, value: 90 },
  { lat: 35.71, lng: 51.37, value: 28 },
  { lat: 35.68, lng: 51.41, value: 52 },
  { lat: 35.74, lng: 51.44, value: 71 },
  { lat: 35.73, lng: 51.39, value: 69 },
  { lat: 35.72, lng: 51.38, value: 58 },
  { lat: 35.70, lng: 51.38, value: 77 },
  { lat: 35.69, lng: 51.43, value: 100 },
  { lat: 35.67, lng: 51.39, value: 32 },
  { lat: 35.69, lng: 51.37, value: 31 },
  { lat: 35.68, lng: 51.38, value: 30 },
  { lat: 35.72, lng: 51.43, value: 62 },
  { lat: 35.73, lng: 51.37, value: 71 },
  { lat: 35.70, lng: 51.44, value: 51 },
  { lat: 35.68, lng: 51.36, value: 51 },
  { lat: 35.69, lng: 51.35, value: 79 },

  // 🔴 Outskirts with higher pollution
  { lat: 35.65, lng: 51.34, value: 180 }, // red
  { lat: 35.66, lng: 51.32, value: 220 }, // purple
  { lat: 35.64, lng: 51.30, value: 310 }, // maroon


];

const getColor = (value) => {
  if (value <= 50) return 'green';
  if (value <= 100) return 'orange';
  return 'red';
};

export default function MapPage() {
  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="flex justify-between items-center px-4 py-2 border-b bg-white">
        <div className="text-blue-700 font-bold">←</div>
        <h1 className="text-sm font-semibold text-blue-700">AIR QUALITY IRAN</h1>
        <div className="w-5"></div>
      </div>

      {/* Adjusted Map Height */}
      <div style={{ height: 'calc(100vh - 118px)' }}>
        <MapContainer
          center={[35.70, 51.41]}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {dataPoints.map((point, index) => (
            <CircleMarker
              key={index}
              center={[point.lat, point.lng]}
              radius={20}
              pathOptions={{
                color: getColor(point.value),
                fillColor: getColor(point.value),
                fillOpacity: 0.7,
              }}
            >
              <Popup>AQI: {point.value}</Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
