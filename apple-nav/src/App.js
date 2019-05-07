import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import NavWrapper from './components/NavWrapper';
import "./style.css";


function App() {
  return (
    <div class="navWrapper">
      <Route component={NavWrapper} />
    </div>
  );
}

export default App;
