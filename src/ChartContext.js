import React, { createContext, useState } from "react";

export const ChartContext = createContext();

export const ChartProvider = (props) => {
  const [showChart, setShowChart] = useState(true);
  const [data, setData] = useState([]);

  const generateChartData = (formData) => {
    let { word, caseType, ngrams, length } = formData;
    if (!length) {
      length = 100;
    }

    if (!ngrams) {
      ngrams = 1;
    }

    const wordObject = wordCalculator(word, caseType, ngrams, length);
    const result = convertObjToArr(wordObject);
    console.log(result);
    setData(result);
  };

  const wordCalculator = (body, caseSensitive, ngrams, length) => {
    body = body.replace(/\s/g, "");
    const wordLen = body.length;
    const iterLen = wordLen < length ? wordLen - 1 : length;

    if (caseSensitive === "ncs") {
      body = body.toLowerCase();
    }

    const words = [];
    for (let i = 0; i < iterLen; i++) {
      words.push(body.slice(i, i + +ngrams));
    }

    const occurence = {};
    for (const val of words) {
      if (!occurence[val]) {
        occurence[val] = 0;
      }
      ++occurence[val];
    }

    return occurence;
  };

  const convertObjToArr = (obj) => {
    const arr = [];
    for (const val in obj) {
      arr.push({ word: val, value: obj[val] });
    }
    return arr;
  };

  return (
    <ChartContext.Provider
      value={[showChart, setShowChart, data, generateChartData]}
    >
      {props.children}
    </ChartContext.Provider>
  );
};
