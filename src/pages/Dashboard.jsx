import React, { useState } from 'react';

const pollutants = [
    { name: 'CO2', level: 130 },
    { name: 'NO2', level: 120 },
    { name: 'NH3', level: 12 },
    { name: 'SO2', level: 10 },
];

export default function Dashboard() {
    const [selectedDate, setSelectedDate] = useState('Today');
    const [showMenu, setShowMenu] = useState(false);
    const [customDate, setCustomDate] = useState('');

    const handleSelect = (value) => {
        if (value === 'Custom') {
            setSelectedDate('Custom');
        } else {
            setSelectedDate(value);
            setCustomDate('');
            setShowMenu(false);
        }
    };

    const handleCustomDateChange = (e) => {
        setCustomDate(e.target.value);
        setSelectedDate(e.target.value);
        setShowMenu(false);
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 p-8 font-sans pb-24">
            {/* Header */}
            <header className="flex items-center justify-between border-b pb-4 mb-6 relative">
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

                {/* Dropdown Button */}
                <div className="relative">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="bg-white border px-4 py-2 rounded-md shadow-sm text-sm font-medium"
                    >
                        {selectedDate} ⌄
                    </button>

                    {showMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-10">
                            <button
                                onClick={() => handleSelect('Today')}
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                            >
                                Today
                            </button>
                            <button
                                onClick={() => handleSelect('Yesterday')}
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                            >
                                Yesterday
                            </button>
                            <div className="px-4 py-2">
                                <label className="block text-xs text-gray-500 mb-1">Custom Date</label>
                                <input
                                    type="date"
                                    value={customDate}
                                    onChange={handleCustomDateChange}
                                    className="w-full text-sm border rounded px-2 py-1"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* AQI Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Air Pollution Index
                </h2>
                <div className="bg-white rounded-lg shadow p-6 text-center">
                    <p className="text-5xl font-bold text-indigo-600">200</p>
                    <p className="text-sm text-gray-500 mt-2">AQI for: {selectedDate}</p>
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

            <footer className="mt-12 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Air Quality Iran. All rights reserved.
            </footer>
        </div>
    );
}
