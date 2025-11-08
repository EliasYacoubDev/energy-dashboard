import React from "react";

function SolarForecast({ forecast }) {
  if (!forecast) return <p>Loading forecast...</p>;

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 text-center">
        {forecast.days.map((date, index) => (
          <div key={date} className="bg-gray-100 rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600">
              {new Date(date).toLocaleDateString("en-US", { weekday: "short" })}
            </p>

            <p className="text-2xl font-bold text-yellow-500">
              {forecast.values[index]} kWh
            </p>

            <p className="text-xs text-gray-400">expected</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SolarForecast;
