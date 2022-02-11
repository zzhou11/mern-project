import React from 'react';
import Recipe from './components/Recipe';
import AddRecipe from './components/AddRecipe';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/add" element={<AddRecipe />}/>
          <Route path="/" element={<Recipe />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
