import { useState } from "react";
import "./dars.css";

const Dars = () => {

    const [count, setCount] = useState(0)

  return (
    <div className="container p-5 bg-secondary">
        <h1 style={{color: "#fff"}}>Counter: {count}</h1>
        <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Qo'shish</button>
        <button className="btn btn-danger mx-3" onClick={() => setCount(prev => prev - 1)}>Ayirish</button>
        <button className="btn btn-primary" onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Dars