import React from 'react';

const weeklyData = [
    { day: 'M', label: 'MON', value: 100 },
    { day: 'T', label: 'TUE', value: 102 },
    { day: 'W', label: 'WED', value: 120 },
    { day: 'T', label: 'THU', value: 98 },
    { day: 'F', label: 'FRI', value: 100 },
    { day: 'S', label: 'SAT', value: 110 },
    { day: 'S', label: 'SUN', value: 90 },
];

export default function WeeklyOverviewPage() {
    const max = 150;
    const todayValue = 200;

    const getAQIStatus = (value) => {
        if (value <= 50) return 'Good';
        if (value <= 100) return 'Moderate';
        if (value <= 150) return 'Unhealthy for Sensitive Groups';
        if (value <= 200) return 'Poor';
        return 'Hazardous';
    };

    return (
        <div className="min-h-screen bg-blue-50 pb-24 px-6 pt-6 font-sans text-center">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-gray-800">AQI</h1>
                <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                        🌊
                    </div>
                    <p className="text-xs font-bold text-indigo-800 mt-1">AIR QUALITY IRAN</p>
                </div>
                <button className="bg-white px-4 py-1 rounded-full shadow text-sm font-semibold">
                    Today ⌄
                </button>
            </div>

            {/* Vertical Bars */}
            <div className="flex justify-between items-end h-40 mb-6">
                {weeklyData.map((day, i) => (
                    <div key={i} className="flex flex-col items-center justify-end h-full">
                        <div
                            className="w-2 rounded-full bg-blue-500 transition-all duration-300"
                            style={{ height: `${(day.value / max) * 100}%` }}
                        />
                        <p className="text-xs mt-2 text-gray-600">{day.label}</p>
                    </div>
                ))}
            </div>

            {/* Big AQI Value */}
            <div className="mb-6">
                <h2 className="text-xs font-semibold tracking-wider text-gray-500">AQI</h2>
                <p className="text-6xl font-extrabold text-blue-500">{todayValue}</p>
                <p className="text-lg font-medium text-gray-700">Air Quality is {getAQIStatus(todayValue)}</p>
            </div>

            {/* Daily AQI Summary Badges */}
            <div className="grid grid-cols-5 gap-3 justify-center text-sm text-gray-700">
                {weeklyData.slice(0, 5).map((d, idx) => (
                    <div
                        key={idx}
                        className="w-12 h-12 rounded-full border-2 border-blue-500 flex flex-col items-center justify-center text-xs font-semibold"
                    >
                        <div>{d.day}</div>
                        <div>{d.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
