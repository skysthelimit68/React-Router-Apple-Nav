import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";


function App() {
  return (
    <div>
      <Route component={Navigation} />
    </div>
  );
}

export default App;
