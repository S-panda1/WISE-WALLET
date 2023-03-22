import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function Stat(props) {

   const smode = () => {
      if (props.mode === "#ffffff") { return "#121212"; }
      else { return "#ffff"; }
  }

  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042"];
  const COLORS2 = ["lightblue", "grey", "green", "#82ca9d"];
  const pieData = [
      {
         name: "week 1",
         value: 30
      },
      {
         name: "week 2",
         value: 20
      },
      {
         name: "week 3",
         value: 26
      },
      {
         name: "week 4",
         value: 24
      }
   ];
  const pie2Data = [
      {
         name: "week 1",
         value: 24
      },
      {
         name: "week 2",
         value: 20
      },
      {
         name: "week 3",
         value: 26
      },
      {
         name: "week 4",
         value: 30
      }
   ];
   const CustomTooltip = ({ active, payload, label }) => {
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#ffff",
               padding: "5px",
               border: "1px solid #cccc"
            }}
         >
            <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
         </div>
      );
   }
   return null;
};
  return (
    <>
      <h3 style={{marginTop:"5px",backgroundColor: props.mode, color: smode()}}>Current spending</h3>
    <div className="container" style={{margin: "auto",display: "flex",justifyContent: "center"}}>
    <PieChart width={730} height={300}>
      <Pie
         data={pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
         fill="#8884d8"
      >
         {pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      </PieChart>
    </div>
      <h3 style={{marginTop:"5px",backgroundColor: props.mode, color: smode()}}>Spending Forecast</h3>
    <div className="container" style={{margin: "auto",display: "flex",justifyContent: "center"}}>
    <PieChart width={730} height={300}>
      <Pie
         data={pie2Data}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
         fill="#8884d8"
      >
         {pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS2[index % COLORS2.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      </PieChart>
    </div>
    </>
  )
}
