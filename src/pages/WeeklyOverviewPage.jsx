import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
        <div className="min-h-screen bg-muted px-5 pt-6 pb-32 text-center">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">AQI</h1>
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold">
                        🌊
                    </div>
                    <p className="text-[10px] font-semibold text-primary mt-1">
                        AIR QUALITY IRAN
                    </p>
                </div>
                <Button variant="outline" size="sm">Today ⌄</Button>
            </div>

            {/* Chart */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="text-sm text-muted-foreground tracking-wide">Weekly AQI</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-end h-36">
                    {weeklyData.map((day, i) => (
                        <div key={i} className="flex flex-col items-center h-full justify-end">
                            <div
                                className="w-2.5 rounded-full bg-blue-500"
                                style={{ height: `${(day.value / max) * 100}%` }}
                            />
                            <p className="text-[10px] text-muted-foreground mt-1">{day.label}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Current AQI */}
            <Card className="mb-6">
                <CardHeader className="text-xs text-muted-foreground tracking-widest">AQI</CardHeader>
                <CardContent>
                    <p className="text-[64px] font-bold text-primary leading-none">{todayValue}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                        Air Quality is {getAQIStatus(todayValue)}
                    </p>
                </CardContent>
            </Card>

            {/* Daily Summary Badges */}
            <div className="flex justify-around">
                {weeklyData.slice(0, 5).map((d, idx) => (
                    <div
                        key={idx}
                        className="w-12 h-12 rounded-full border-2 border-primary flex flex-col items-center justify-center text-[10px] font-semibold"
                    >
                        <div>{d.day}</div>
                        <div>{d.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
