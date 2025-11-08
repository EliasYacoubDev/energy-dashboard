import React from "react";

function EnergyCard({ label, value, color }) {
  return (
    <div
      className="bg-[#0D1325]
      rounded-2xl
      shadow-[0_8px_30px_rgb(0,0,0,0.25)]
      p-6
      hover:scale-[1.04]
      hover:shadow-[0_0px_40px_rgba(0,89,255,0.25)]
      transition-all duration-200
      cursor-pointer"
    >
      <p className="text-gray-400 text-sm">{label}</p>
      <h3 className={`text-3xl font-bold ${color}`}>{value}</h3>
    </div>
  );
}

export default EnergyCard;
