import React, { useContext, useState } from "react";
import { AiOutlineBarChart, AiOutlineTable } from "react-icons/ai";
import { ChartContext } from "../../ChartContext";

const focusStyle = {
  outline: "none",
  height: "120px",
  width: "120px",
  boxShadow: "none",
  transition: "height 0.8s ease-out, width 0.8s ease-out",
};

const ChartForm = () => {
  const [showChart, setShowChart, , generateChartData] = useContext(
    ChartContext
  );
  const [formData, setFormData] = useState({
    word: "",
    caseType: "cs",
    ngrams: "",
    length: "",
  });

  const handleSwitchView = (type) => {
    const value = type === "chart";
    setShowChart(value);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitForm = () => {
    generateChartData(formData);
  };

  const { word, caseType, ngrams, length } = formData;
  return (
    <div>
      <h3>Create Chart from words</h3>
      <div className="formDiv">
        <div>
          <input
            type="text"
            name="word"
            className="input1"
            placeholder="body"
            onChange={onChange}
            value={word}
          />
        </div>
        <div className="my-2">
          <select
            className="input2"
            name="caseType"
            onChange={onChange}
            value={caseType}
          >
            <option value="cs">Case Sensitive</option>
            <option value="ncs">Not case Sensitive</option>
          </select>
        </div>
        <div className="formRow">
          <div className="mr-4">
            <input
              type="text"
              placeholder="ngrams"
              name="ngrams"
              onChange={onChange}
              value={ngrams}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="length"
              name="length"
              onChange={onChange}
              value={length}
            />
          </div>
        </div>
      </div>
      <button className="submitBtn" onClick={submitForm}>
        Create Chart
      </button>
      <div className="widgetGroup">
        <div
          className="text-center ml-n2"
          onClick={() => handleSwitchView("chart")}
        >
          <button
            className="widget widget1"
            style={showChart ? focusStyle : null}
          >
            <AiOutlineBarChart color="white" size={55} />
          </button>
          <div className="mt-1">View Chart</div>
        </div>
        <div className="text-center" onClick={() => handleSwitchView("table")}>
          <button
            className="widget widget2"
            style={!showChart ? focusStyle : null}
          >
            <AiOutlineTable color="white" size={55} />
          </button>
          <div className="mt-1">View Table</div>
        </div>
      </div>
    </div>
  );
};

export default ChartForm;
