import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContext } from "../../ChartContext";
import { ImFilesEmpty } from "react-icons/im";

const displayComponent = (showChart, data) => {
  if (showChart) {
    return (
      <BarChart
        width={700}
        height={500}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="word" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    );
  } else {
    return (
      <table>
        <thead>
          <tr>
            <td>Word</td>
            <td>Length</td>
          </tr>
        </thead>
        <tbody>
          {data.map(({ word, value }) => (
            <tr key={uuidv4()}>
              <td>{word}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

const TableChart = () => {
  const [showChart, , data] = useContext(ChartContext);
  return (
    <div className="tableChart">
      Table/Chart Display
      {data.length > 0 ? (
        displayComponent(showChart, data)
      ) : (
        <div className="emptyDiv">
          <ImFilesEmpty size={80} />
          <div className="mt-1">No data to show yet</div>
        </div>
      )}
    </div>
  );
};

export default TableChart;
