import { useEffect, useState } from "react";
import { getEnergySummary, getSolarForecast } from "../services/energyService";
import EnergyCard from "../components/EnergyCard";
import EnergyChart from "../components/EnergyChart";
import SolarForecast from "../components/SolarForecast";

function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    async function loadData() {
      const { summary, chart } = await getEnergySummary();
      const forecastData = await getSolarForecast();
      setSummary(summary);
      setChartData(chart);
      setForecast(forecastData);
    }
    loadData();
  }, []);

  if (!summary) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="px-10 py-10 max-w-[1400px] mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        Dashboard Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <EnergyCard
          label="Total Energy Today"
          value={summary.totalEnergyToday}
          color="text-blue-400"
        />
        {/* Card 2 */}
        <EnergyCard
          label="Savings Today"
          value={summary.savingsToday}
          color="text-green-400"
        />
        {/* Card 3 */}
        <EnergyCard
          label="Peak Production Today"
          value={summary.peakDemand}
          color="text-red-400"
        />
        {/* Card 4 */}
        <EnergyCard
          label="Total SunHours Today"
          value={summary.sunHoursToday}
          color="text-yellow-400"
        />
      </div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="col-span-2 bg-white rounded-xl shadow p-6 flex flex-col justify-start">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Energy Production Today
          </h3>
          <div className="w-full h-[300px]">
            <EnergyChart data={chartData} />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-start">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Solar Forecast (Next 3 Days)
          </h3>
          <SolarForecast forecast={forecast} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
