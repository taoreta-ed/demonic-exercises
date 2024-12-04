import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const user = {
    firstName: 'Ryan',
    lastName: 'McMillan'
  }

  return <h1>{JSON.stringify}</h1>
}

root.render(<Greeting />);
