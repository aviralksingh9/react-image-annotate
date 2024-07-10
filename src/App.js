// src/App.js
import React from "react";
import "./App.css";
import ImageAnnotator from "./Component/ImageAnnotator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Image Annotate PoC</h1>
      </header>
      <ImageAnnotator />
    </div>
  );
}

export default App;
