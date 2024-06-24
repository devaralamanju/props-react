import './App.css';
import React, { useState } from "react";
import Child from './Child';
import ProductDistruring from './ProductDistruring' 
import Product from './Product';
import Home from './Home';

function App() {
  let isAdmin = 'false'
  let prod1 = {
    id: 1,
    name: "Lenovo Think pad",
    aprice: 12000,
    dprice: 10000
}

const [data,setData] = useState("Hello from App.Js")
const updateData = (newData) => {
  setData(newData)
}

  return (
    <>
    <Home data={isAdmin}></Home>
    {/* <Product {...prod1}/> */}
  <Product id={prod1.id} name={prod1.name} aprice={prod1.aprice} dprice={prod1.dprice}/>
  <ProductDistruring id={prod1.id} name={prod1.name} aprice={prod1.aprice} dprice={prod1.dprice}/>
    <div>
        <h1>App component</h1>
        {data}
        <Child  manjula={data} onUpdateData={updateData} />
    </div>
    </>
  );
}

export default App;
