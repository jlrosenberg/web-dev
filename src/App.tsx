import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen";

const App: React.FC = () => (
  <BrowserRouter>
  <div className="container">
    <Routes>
      <Route path="/">
        <Route path="labs"
               element={<Labs/>}/>
        <Route path="hello"
               element={<HelloWorld/>}/>
        <Route path="tuiter"
               element={<Tuiter/>}>
          <Route index
                 element={<HomeScreen/>}/>
          <Route path="explore"
                 element={<ExploreScreen/>}/>
          {/* <Route path="notifications" 
                 element={<NotificationScreen/>}/> */}
          ...
        </Route>
      </Route>
    </Routes>
  </div>
</BrowserRouter>
);
export default App;
