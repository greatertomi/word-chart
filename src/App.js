import React from "react";
import "./app.scss";
import "./utilities.scss";
import TableChart from "./TableChart";
import { FaTwitterSquare } from 'react-icons/fa';

function App() {
  return (
    <div className="app">
      <div>
        <h3>Create Chart from words</h3>
        <div>
          <input type="text" name="word" className="input1" placeholder="body"/>
        </div>
        <div className="my-2">
          <select className="input2">
            <option value='cs'>Case Sensitive</option>
            <option value='ncs'>Not case Sensitive</option>
          </select>
        </div>
        <div className="formRow">
          <div className="mr-4">
            <input type="text" placeholder="ngrams"/>
          </div>
          <div>
            <input type="text" placeholder="length"/>
          </div>
        </div>
        <button className="submitBtn">Create Chart</button>
        <div className='widgetGroup'>
          <div className='text-center ml-n2'>
            <button className='widget widget1'>
              <FaTwitterSquare color='white' fontSize='45px'/>
            </button>
            <div className="mt-1">View Chart</div>
          </div>
          <div className='text-center'>
            <button className='widget widget2'>
              <FaTwitterSquare color='white' fontSize='45px'/>
            </button>
            <div className="mt-1">View Table</div>
          </div>
        </div>
      </div>
      <div>
        <TableChart />
      </div>
    </div>
  );
}

export default App;
