import React from "react";
import { useState, useEffect } from "react";
import { getEnergySummary } from "../services/energyService";
import AnalyticsCard from "../components/AnalyticsCard";

function Analytics() {
  const [analytics, setAnalytics] = useState(null);
  useEffect(() => {
    async function load() {
      const { summary } = await getEnergySummary();
      const energyNum = parseFloat(summary.totalEnergyToday);

      const co2_avoided = energyNum * 0.92;
      const trees_equivalent = co2_avoided / 48;

      setAnalytics({
        co2_avoided: co2_avoided.toFixed(1),
        trees: trees_equivalent.toFixed(1),
      });
    }
    load();
  }, []);
  if (!analytics) return <p className="text-center">Loading...</p>;
  return (
    <div className="px-10 py-10 max-w-[1400px] mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">
        Analytics Dashboard
      </h1>
      {/*Metric cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalyticsCard
          label="CO2 Avoided Today"
          value={`${analytics.co2_avoided} lbs`}
        />
        <AnalyticsCard
          label="Trees Equivalent"
          value={`${analytics.trees} trees`}
        />
      </div>
    </div>
  );
}

export default Analytics;
