import React from "react";
import "./App.css";
import Header from "./components/Header";
import Feedback from "./feedbacks";

function App() {
  return (
    <div className="App border bg-slate-600 h-screen">
      <Header />
      <Feedback />
    </div>
  );
}

export default App;
