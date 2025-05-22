import ReactSpeedometer from "react-d3-speedometer";

export default function AQIGauge({ aqiValue }) {
    return (
        <div className="flex flex-col items-center my-6">
            <ReactSpeedometer
                value={aqiValue}
                minValue={0}
                maxValue={500}
                segments={6}
                segmentColors={['#00e400', '#ffff00', '#ff7e00', '#ff0000', '#8f3f97', '#7e0023']}
                needleColor="gray"
                textColor="black"
                valueTextFontSize="20px"
                labelFontSize="12px"
                height={180}
            />
            <p className="mt-2 text-sm font-medium text-gray-700">AQI: {aqiValue}</p>
        </div>
    );
}
