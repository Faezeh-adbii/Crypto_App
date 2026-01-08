import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";
import { convertData } from "../../helpers/convertData";
import styles from "./Chart.module.css";
import { useState } from "react";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  console.log(convertData(chart, type));
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          <Chartcomponent data={convertData(chart, type)} type={type} />
        </div>
      </div>
    </div>
  );
}

export default Chart;

const Chartcomponent = ({ data, type }) => {
  return (
    <ResponsiveContainer>
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
