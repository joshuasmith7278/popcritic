import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import DisplaySearchBar from './components/header';
import Home from './pages/home';
import PageRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';



function App() {

 

  console.log("App Renders");
  return (
    <div>
      

      <PageRoutes />
      

    </div>
  );
}

export default App;
