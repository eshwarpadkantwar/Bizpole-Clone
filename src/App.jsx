import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Navbar from '../Components/Navbar';
import Homepage from '../Pages/Homepage';
// import Privatelimitedcompany from '../Pages/Privatelimitedcompany';
import Footer from '../Components/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
