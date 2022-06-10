import React, { useState } from 'react'

export default function Form() {
  const [run, setRun] = useState();
  const [runs, setRuns] = useState([]);

  const handleClick=(e) =>{
    e.preventDefault();
    const values = e.target.value
    setRun(values)
    console.log("run", run)
    setRuns([...runs,run])
  }
  return (
    <div>
      <input value="2" type="number" onChange={handleClick} />
      <button value="1" onClick={handleClick}>one</button>
      <button  value="2" onClick={handleClick}>two</button>
      {runs.map((item, index) => (
        <div key={index}>
          <h1>{item}</h1>
          {/* <h1>{item.three}</h1> */}
        </div>
      ))}
    </div>
  )
}
