import './App.css';
import React from 'react'
import Home from './components/home';


import PartnersLogo from './components/partners';
import SliderCard from './components/slider';
import ContactUs from './components/contactus';
import Footer from './components/footer';
import Homethree from './components/homethree';
import Homefour from './components/homefour';
import Team from './components/team';

function App() {
  return (
   <React.Fragment>
     <Home/>
     <Homethree/>
     <Homefour/>
     <SliderCard/>
     <Team/>
     <PartnersLogo/>
     <ContactUs/>
     <Footer/>
   </React.Fragment>
  );
}

export default App;
