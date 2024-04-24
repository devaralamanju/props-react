import './App.css';
import React, { useState } from "react";
import Child from './Child';

function App() {
const [data,setData] = useState("Hello from App.Js")

const updateData = (newData) => {
  setData(newData)
}

  return (
    <div className="App">
        <h1>App component</h1>
        {data}
        <Child  manjula={data} onUpdateData={updateData} />
    </div>
  );
}

export default App;
