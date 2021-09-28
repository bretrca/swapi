import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './assets/styles/App.css';
import axios from 'axios';
import { Provider } from 'react-redux'



//importar componentnes

import BarraSuperior from './components/barraSuperior';
import Contenido from './components/Contenido';




function App() {
  const [searchData, setSearchData]= useState({});
 
 
  return (

    <div className="App">
     <BarraSuperior setSearchData= {setSearchData} />
     <Contenido data ={searchData}/>
     <div >
     {searchData.name}
     </div>
    </div>
  );
}

export default App;
