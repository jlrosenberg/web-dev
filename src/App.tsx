import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";

const App: React.FC = () => (
  <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/tuiter" element={<Tuiter />} />
        {/* Put this here bc having an empty default is stupid */}
        <Route path="/" element={<Labs/>} />
      </Routes>
    </div>
  </BrowserRouter>
);
export default App;
