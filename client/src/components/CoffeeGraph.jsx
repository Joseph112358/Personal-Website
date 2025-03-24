import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CoffeeGraph = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);


const data = [
    { name: "Pret", value: 1 },
    { name: "Costa", value: 2 },
    { name: "Nero", value: 3 },
    { name: "Black Sheep Coffee", value: 4 },
    { name: "Cafe Roma", value: 5 },
  ];

  const handleClick = (dataPoint) => {
    setSelectedPoint(dataPoint);
    alert(`You clicked on ${dataPoint.name}: ${dataPoint.value}`);
  };

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h3>Coffees in St Albans ratings</h3>
      {selectedPoint && (
        <div>
          <strong>Selected:</strong> {selectedPoint.name} - {selectedPoint.value}
        </div>
      )}
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            onClick={(e) => handleClick(e)}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CoffeeGraph;