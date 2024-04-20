import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Navbar from '../Components/Navbar';

// import Homepage from '../Pages/Homepage';
// import Privatelimitedcompany from '../Pages/Privatelimitedcompany';
// import LLP from '../Pages/LLP';
// import Companyregn from '../Pages/Companyregn';
// import Partnershipfirm from '../Pages/Partnershipfirm';
// import Onepersoncompany from '../Pages/Onepersoncompany';
// import Proprietorshipfirm from '../Pages/Proprietorshipfirm';
// import Trademarkregn from '../Pages/Trademarkregn';
// import Trademarkassignment from '../Pages/Trademarkassignment';
// import ITReturn from '../Pages/ITReturn';
// import GSTReturn from '../Pages/GSTReturn';
// import TANApp from '../Pages/TANApp';
// import PANApp from '../Pages/PANApp';
// import LLPAnnual from '../Pages/LLPAnnual';
// import Changecompname from '../Pages/Changecompname';
import Pro2pvtltd from '../Pages/Pro2pvtltd';
import Footer from '../Components/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <Pro2pvtltd/>
      <Footer/>
    </div>
  );
}

export default App;
