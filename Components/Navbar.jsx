import React, { useState } from 'react';
import "../CSS/Navbar.css"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'white' }}>
    <div className="container-fluid">
      <a className="navbar-brand fw-bold text-dark ms-3" href="#">Bizpole</a>
      <button className="navbar-toggler bg-danger" onClick={toggleNavbar} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-dark"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Incorporation
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item text-dark" href="#">Private Limited Company</a></li>
                <li><a className="dropdown-item text-dark" href="#">Limited Liability Partnership</a></li>
                <li><a className="dropdown-item text-dark" href="#">Partnership Firm</a></li>
                <li><a className="dropdown-item text-dark" href="#">One Person Company</a></li>
                <li><a className="dropdown-item text-dark" href="#">Proprietorship Firm</a></li>
                <li><a className="dropdown-item text-dark" href="#">Public Limited Company</a></li>
                <li><a className="dropdown-item text-dark" href="#">Section 8 Company</a></li>
                <li><a className="dropdown-item text-dark" href="#">Nidhi Company</a></li>
                <li><a className="dropdown-item text-dark" href="#">Producer Company</a></li>
                <li><a className="dropdown-item text-dark" href="#">Trust</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                IPR
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item text-dark" href="#">Trademark Registration</a></li>
                <li><a className="dropdown-item text-dark" href="#">Trademark Assignment</a></li>
                <li><a className="dropdown-item text-dark" href="#">Trademark Objection</a></li>
                <li><a className="dropdown-item text-dark" href="#">Trademark Hearing</a></li>
                <li><a className="dropdown-item text-dark" href="#">Copyright Hearing</a></li>
                <li><a className="dropdown-item text-dark" href="#">Patent Registration</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Taxes
              </a>
              <ul className="dropdown-menu">

                <li className="nav-item dropend">
                  <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tax Filings
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Income Tax Return</a></li>
                    <li><a className="dropdown-item" href="#">GST Return</a></li>
                    <li><a className="dropdown-item" href="#">TDS/TCS Return</a></li>
                    <li><a className="dropdown-item" href="#">Respond to Income Tax Notice</a></li>
                    <li><a className="dropdown-item" href="#">Respond to GST Notice</a></li>
                    <li><a className="dropdown-item" href="#">E-way bill</a></li>

                  </ul>
                </li>


                <li className="nav-item dropend">
                  <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tax Registration
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">TAN Application</a></li>
                    <li><a className="dropdown-item" href="#">PAN Application</a></li>
                    <li><a className="dropdown-item" href="#">GST Registration</a></li>

                  </ul>
                </li>

              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Compliances Package
              </a>
              <ul className="dropdown-menu">

                <li className="nav-item dropend">
                  <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Compliances Package
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">LLP Annual Filing</a></li>
                    <li><a className="dropdown-item" href="#">Company Annual Filing</a></li>
                    <li><a className="dropdown-item" href="#">Maintaenance of Minutes/ Statutory</a></li>
                    <li><a className="dropdown-item" href="#">Register Accounting/ Book keeping</a></li>

                  </ul>
                </li>


                <li className="nav-item dropend">
                  <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Updation of Records
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Change in Company Name</a></li>
                    <li><a className="dropdown-item" href="#">Change in Directors</a></li>
                    <li><a className="dropdown-item" href="#">Maintaenance of Minutes/ Statutory</a></li>
                    <li><a className="dropdown-item" href="#">Register Accounting/ Book keeping</a></li>
                    <li><a className="dropdown-item" href="#">Change in Authorized Share</a></li>
                    <li><a className="dropdown-item" href="#">Captial</a></li>
                    <li><a className="dropdown-item" href="#">Allotment of shares</a></li>
                    <li><a className="dropdown-item" href="#">Transfer of shares</a></li>

                  </ul>
                </li>

                <li className="nav-item dropend">
                  <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Conversions / Wind up
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Proprietorship To Pvt Ltd</a></li>
                    <li><a className="dropdown-item" href="#">Partnership to LLP</a></li>
                    <li><a className="dropdown-item" href="#">Private Limited to LLP</a></li>
                    <li><a className="dropdown-item" href="#">Closing LLP</a></li>
                    <li><a className="dropdown-item" href="#">Closing Private Limited</a></li>
                    <li><a className="dropdown-item" href="#">Closing Partnership Firm</a></li>
                    <li><a className="dropdown-item" href="#">Strike off</a></li>


                  </ul>
                </li>

              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Channel Partner</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
