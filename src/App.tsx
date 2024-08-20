import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState("");
  const [data, setData] = useState<string[]>([]);

  const addVal = (val: string): void => {
    setData([...data, val]);
    setVal(""); // Use array spread to add new value
  };
  const deleteVal = (val1: string): void => {
    console.log(val);
    const updatedData = data.filter((val, ind) => val !== val1);
    setData(updatedData);
  };

  return (
    <div>
      <h1 className="flex text-blue-500">Hello</h1>
      <input
        type="text"
        name="todo"
        onChange={(e) => setVal(e.target.value)}
        value={val}
      />
      <button className="btn" onClick={() => addVal(val)}>
        Add
      </button>
      {data.map((val, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "10px",
            padding: "10px",
          }}
        >
          <p key={index}>{val}</p>
          <button onClick={() => deleteVal(val)}>Delete Task</button>
        </div> // Add a key for each item in the list
      ))}
    </div>
  );
};

export default App;
