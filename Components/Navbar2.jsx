import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Incorporation
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Private Limited Company</a></li>
                <li><a className="dropdown-item" href="#">Limited Liability Partnership</a></li>
                <li><a className="dropdown-item" href="#">Partnership Firm</a></li>
                <li><a className="dropdown-item" href="#">One Person Company</a></li>
                <li><a className="dropdown-item" href="#">Proprietorship Firm</a></li>
                <li><a className="dropdown-item" href="#">Public Limited Company</a></li>
                <li><a className="dropdown-item" href="#">Section 8 Company</a></li>
                <li><a className="dropdown-item" href="#">Nidhi Company</a></li>
                <li><a className="dropdown-item" href="#">Producer Company</a></li>
                <li><a className="dropdown-item" href="#">Trust</a></li>
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                IPR
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Trademark Registration</a></li>
                <li><a className="dropdown-item" href="#">Trademark Assignment</a></li>
                <li><a className="dropdown-item" href="#">Trademark Objection</a></li>
                <li><a className="dropdown-item" href="#">Trademark Hearing</a></li>
                <li><a className="dropdown-item" href="#">Copyright Hearing</a></li>
                <li><a className="dropdown-item" href="#">Patent Registration</a></li>
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Taxes
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><b>Tax billings</b></li>
              <li><a className="dropdown-item" href="#">GST Return</a></li>
                <li><a className="dropdown-item" href="#">TDS/TCS Return</a></li>
                <li><a className="dropdown-item" href="#">Respond to Income Tax Notice</a></li>
                <li><a className="dropdown-item" href="#">Respond to GST Notice</a></li>
                <li><a className="dropdown-item" href="#">E-way bill</a></li>
                <li><b>Tax Registration</b></li>
                <li><a className="dropdown-item" href="#">TAN Application</a></li>
                <li><a className="dropdown-item" href="#">PAN Application</a></li>
                <li><a className="dropdown-item" href="#">GST Registration</a></li>
              </ul>
            </li>
          </ul>
          

          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Compliances Package
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><b>Compliance Package</b></li>
                <li><a className="dropdown-item" href="#">LLP Annual Filing</a></li>
                <li><a className="dropdown-item" href="#">Company Annual Filing</a></li>
                <li><a className="dropdown-item" href="#">Maintaenance of Minutes/ Statutory</a></li>
                <li><a className="dropdown-item" href="#">Register Accounting/ Book keeping</a></li>
                <li><b>Updation of Records</b></li>
                <li><a className="dropdown-item" href="#">Change in Company Name</a></li>
                <li><a className="dropdown-item" href="#">Change in Directors</a></li>
                <li><a className="dropdown-item" href="#">Maintaenance of Minutes/ Statutory</a></li>
                <li><a className="dropdown-item" href="#">Register Accounting/ Book keeping</a></li>
                
              </ul>
        
            </li>
          </ul>
          <a className="nav-link active" aria-current="page" href="#">Channel Partner</a>
          <a className="nav-link active" aria-current="page" href="#">Blog</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
