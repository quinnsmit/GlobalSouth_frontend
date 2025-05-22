import React, {useState} from 'react';
import AQIGauge from "../components/AQIGauge.jsx";

export default function AQIInfoPage() {
    const [aqiValue] = useState(135);

    return (
        <div className="min-h-screen w-full bg-white font-sans pb-24 px-4 pt-6">
            {/* Logo */}
            <div className="flex flex-col items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                    🌊
                </div>
                <h1 className="text-sm font-bold text-blue-900 mt-2">AIR QUALITY IRAN</h1>
            </div>

            {/* AQI Gauge Illustration */}
            <AQIGauge aqiValue={aqiValue} />

            {/* Health Impact Descriptions */}
            <div className="space-y-2 text-sm font-medium text-black">
                <p className="bg-green-300 p-3 rounded">The air is clean and safe to breathe for everyone. No health risks expected.</p>
                <p className="bg-yellow-200 p-3 rounded">People who are very sensitive to air pollution (like those with asthma) might feel mild effects. Most people won’t be affected.</p>
                <p className="bg-yellow-400 p-3 rounded">Older adults, children, and people with heart or lung problems may experience symptoms like coughing or trouble breathing. Consider staying indoors if you’re in these groups.</p>
                <p className="bg-red-400 p-3 rounded">Older adults, children, and people with heart or lung problems may experience symptoms like coughing or trouble breathing. Consider staying indoors if you’re in these groups.</p>
                <p className="bg-purple-300 p-3 rounded">Breathing the air can cause serious health issues. Avoid outdoor activity and keep windows closed.</p>
                <p className="bg-red-800 p-3 rounded">The entire population is at risk. Stay indoors, avoid physical activity, and use an air purifier or mask if possible.</p>
            </div>
        </div>
    );
}
