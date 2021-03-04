import React from "react";
import "./app.scss";
import "./utilities.scss";
import TableChart from "./TableChart";
import ChartForm from "./ChartForm";
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
