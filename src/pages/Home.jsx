import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-white font-sans flex flex-col justify-between pb-24">
            {/* Content */}
            <div className="px-6 pt-8">
                {/* Logo */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                        🌊
                    </div>
                    <h1 className="text-sm font-bold text-blue-900 mt-2">AIR QUALITY IRAN</h1>
                </div>

                {/* Illustration (replace with real image or keep placeholder) */}
                <div className="bg-blue-100 rounded-3xl shadow-md p-6 text-center">
                    <div className="w-full h-48 bg-blue-300 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl">
                        {/* You can replace this with an actual <img /> later */}
                        Illustration Here
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Your Air Quality Today
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-gray-600">
                        Real-time air quality alerts for you and your family.
                    </p>
                </div>
            </div>

            {/* Bottom nav spacing is accounted for by pb-24 */}
        </div>
    );
}
