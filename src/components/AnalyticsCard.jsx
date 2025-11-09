import React from "react";

function AnalyticsCard({ label, value }) {
  return (
    <div className="bg-[#0D1325] text-white p-6 rounded-xl shadow">
      <p className="text-sm text-gray-400">{label}</p>
      <h3 className="text-4xl font-bold mt-2">{value}</h3>
    </div>
  );
}

export default AnalyticsCard;
