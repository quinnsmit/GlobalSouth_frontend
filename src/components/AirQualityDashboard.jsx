import React from 'react';

const pollutants = [
    { name: 'CO2', level: 130 },
    { name: 'NO2', level: 120 },
    { name: 'NH3', level: 12 },
    { name: 'SO2', level: 10 },
];

export default function AirQualityDashboard() {
    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            {/* Header */}
            <header className="flex items-center justify-between border-b pb-4 mb-6">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-bold">
                        🌊
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-indigo-800 leading-tight">
                            Air Quality Iran
                        </h1>
                        <p className="text-sm text-gray-500">Air Pollution Dashboard</p>
                    </div>
                </div>
                <button className="bg-white border px-4 py-2 rounded-md shadow-sm text-sm font-medium">
                    Today ⌄
                </button>
            </header>

            {/* AQI Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Air Pollution Index
                </h2>
                <div className="bg-white rounded-lg shadow p-6 text-center">
                    <p className="text-5xl font-bold text-indigo-600">200</p>
                    <p className="text-sm text-gray-500 mt-2">AQI for today</p>
                </div>
            </section>

            {/* Pollutant Levels */}
            <section>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Pollutant Levels (PPM)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {pollutants.map((pollutant) => (
                        <div key={pollutant.name} className="bg-white p-6 rounded-lg shadow text-center">
                            <p className="text-gray-600 text-sm mb-1">Level of {pollutant.name}</p>
                            <p className="text-3xl font-bold text-gray-900">{pollutant.level}</p>
                            <p className="text-xs text-gray-500">PPM</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Optional Footer */}
            <footer className="mt-12 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Air Quality Iran. All rights reserved.
            </footer>
        </div>
    );
}
