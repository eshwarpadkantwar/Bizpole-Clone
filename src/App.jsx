import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Navbar from '../Components/Navbar';
import Homepage from '../Pages/Homepage';

function App() {

  return (
    <div>
      <Navbar />
      <Homepage/>
    </div>
  );
}

export default App;
