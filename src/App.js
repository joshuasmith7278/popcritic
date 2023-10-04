import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import DisplaySearchBar from './components/header';
import PageRoutes from './routes';



function App() {

  

  console.log("App Renders");
  return (
    <div>
      <DisplaySearchBar /> 
      <PageRoutes />
      

    </div>
  );
}

export default App;
