import './App.css';
import React from 'react'
import Header from './components/header';
import Cards from './components/cards';
import ModalVertical from './components/modal';
import PartnersLogo from './components/partners';


function App() {
  function Parentfunc(data){
    console.log(data);
  }
  return (
   <React.Fragment>
     <Header/>
     <Cards alert={Parentfunc}/>
     <ModalVertical/>
     <PartnersLogo/>
   </React.Fragment>
  );
}

export default App;
