import axios from "axios";

const BASE_URL = "https://api.open-meteo.com"

export async function getEnergySummary() {
    const url = (`${BASE_URL}/v1/forecast?latitude=33.89&longitude=35.50&hourly=shortwave_radiation&timezone=auto&forecast_days=1`)

    const response = await axios.get(url);

    const solar = response.data.hourly.shortwave_radiation;
    const times = response.data.hourly.time;

    const totalEnergyToday = solar.reduce((sum, v) => sum + v, 0) / 1000;
    const peakDemand=Math.max(...solar)/1000;
    const savingsToday = totalEnergyToday * 0.12;
    const usableSunHours = solar.filter(v => v > 120).length;

    return {
        summary: {
            totalEnergyToday: totalEnergyToday.toFixed(1) + " kWh",
            savingsToday: "$" + savingsToday.toFixed(2),
            peakDemand: peakDemand.toFixed(1) + " kW",
            sunHoursToday: usableSunHours + " hrs"
        },
        chart:{
            times,
            values: solar.map(v => v/1000)
        }
    };
}

export async function getSolarForecast() {
    const url = `${BASE_URL}/v1/forecast?latitude=33.89&longitude=35.50&daily=shortwave_radiation_sum&timezone=auto&forecast_days=4`;

    const response = await axios.get(url);

    const forecast = response.data.daily.shortwave_radiation_sum;
    const dates = response.data.daily.time;

    // Convert Wh/m² to kWh
    const values = forecast.slice(1, 4).map(v => (v * 0.2778).toFixed(1));
    const days = dates.slice(1, 4); // next 3 days only

    return { days, values };
}
