import React from "react";
import "./app.scss";
import "./utilities.scss";
import TableChart from "./components/table-chart/TableChart";
import ChartForm from "./components/chart-form/ChartForm";
import { ChartProvider } from "./ChartContext";

function App() {
  return (
    <ChartProvider>
      <div className="app">
        <ChartForm />
        <TableChart />
      </div>
    </ChartProvider>
  );
}

export default App;
