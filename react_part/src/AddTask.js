import React, { useState } from "react";
import axios from "axios";

export const AddTask = () => {
  const [msg, setMsg] = useState("");

  const getBack = (event) => {
    console.log("hi");

    event.preventDefault();
    alert(`Data is ${msg}`);

    axios.post("http://localhost:8080/", msg).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="addTask">
      <h1>Hello</h1>
      <form onSubmit={getBack}>
        <label for="addtask">Add a task: </label>
        <input
          id="addtask"
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></input>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
