import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashBoard = () => {
  const [chartData, SetChartData] = useState([]);
  useEffect(() => {
    fetch("chartData.json")
      .then((res) => res.json())
      .then((data) => SetChartData(data));
  }, []);
  return (
    <div className="chart-container grid grid-cols-2 gap-10 mt-10">
      <div className="chart-content text-center">
        <h3 className="text-2xl text-orange-400 mb-3">Month wise sell</h3>
        <LineChart width={400} height={400} data={chartData}>
          <Line dataKey={"sell"} stroke="#FFA500"></Line>
          <XAxis dataKey={"month"}></XAxis>
          <YAxis></YAxis>
          <Tooltip />
        </LineChart>
      </div>
      <div className="chart-content text-center">
      <h3 className="text-2xl text-orange-400 mb-3">investment vs Revenue</h3>
        <BarChart width={400} height={400} data={chartData}>
        <Bar dataKey={"investment"} fill="#FF8C00"></Bar>
          <Bar dataKey={"revenue"} fill="#FFA500"></Bar>
          <XAxis dataKey={"month"}></XAxis>
          <YAxis></YAxis>
          <Tooltip/>
        </BarChart>
      </div>
      <div className="chart-content text-center">
      <h3 className="text-2xl ml-48 text-orange-400 mb-3"> Monthly investment</h3>
        <RadarChart outerRadius={90} width={730} height={250} data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="month" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="sell"
            dataKey="investment"
            stroke="#FF8C00"
            fill="#FFA500"
            fillOpacity={0.6}
          />
          <Legend />
          <Tooltip />
        </RadarChart>
      </div>
    </div>
  );
};

export default DashBoard;
