import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMeta, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import "../CSS/Footer.css"


function Footer() {

    return (
        <div>
            <footer className="bg-danger foot text-light pt-5">
                <div className="container px-5">
                    <div className="row">
                        <div className="col-6 col-lg-4">
                            <h1 className="fw-bold">Bizpole</h1>
                            <p className="pt-2">Business consulting and services for entrepreneurs and small businesses in India.</p>
                            <h2 className="mb-3">Reach Us</h2>
                            <p className="mb-2"><FontAwesomeIcon icon={faLocationDot} />  Banglore | Kerala</p>
                            <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} />  info@bizpole.in</p>
                            <p className="mb-5"><FontAwesomeIcon icon={faPhone} />  +91 9539995533</p>
                            <div className="llp mb-3">
                                <h5>LLP</h5>
                                <p className="mb-2">India</p>
                                <p className="mb-2">Kerala</p>
                                <p className="mb-5">Chennai</p>
                            </div>

                            <div className="pfirm mb-3">
                                <h5>Partnership Firm</h5>
                                <p className="mb-2">India</p>
                                <p className="mb-5">Bangalore</p>
                            </div>

                            <div className="regn">
                                <h5>Trust Registration </h5>
                                <p className="mb-2">India</p>
                                <p className="mb-2">Kerala</p>
                                <p className="mb-5">Maharashtra</p>
                            </div>

                            <div className="nidhi mb-3">
                                <h5>Nidhi Company</h5>
                                <p className="mb-2">India</p>
                                <p className="mb-5">Kerala</p>
                            </div>
                        </div>
                        <div className="col">
                            <h4>Company</h4>
                            <ul className="list-unstyled pt-2">
                                <li className="py-1">Home</li>
                                <li className="py-1">About</li>
                                <li className="py-1">Careers</li>
                                <li className="py-1">Contact Us</li>
                                <li className="py-1 mb-5">Blog</li>
                            </ul>
                            <div className="nidhi mb-3">
                                <h5>Company Registration</h5>
                                <p className="py-1 mb-2">Bangalore</p>
                                <p className="py-1 mb-2">Hubli</p>
                                <p className="py-1 mb-2">Mangalore</p>
                                <p className="py-1 mb-2">Kochi</p>
                                <p className="py-1 mb-2">Kozhikode</p>
                                <p className="py-1 mb-2">Trivandrum</p>
                                <p className="py-1 mb-2">Thrissur</p>
                                <p className="py-1 mb-2">Malappuram</p>
                                <p className="py-1 mb-2">Chennai</p>
                                <p className="py-1 mb-2">Coimbatore</p>
                                <p className="py-1 mb-2">Madurai</p>
                                <p className="py-1 mb-2">Salem</p>
                                <p className="py-1 mb-2">Erode</p>
                                <p className="py-1 mb-2">Trichy</p>
                                <p className="py-1 mb-2">Tirupur</p>
                                <p className="py-1 mb-2">Hyderabad</p>
                                <p className="py-1 mb-2">Mysore</p>
                                <p className="py-1 mb-5">Belgaum</p>
                            </div>
                        </div>
                        <div className="col">
                            <h4>Popular Services</h4>
                            <ul className="list-unstyled pt-2">
                                <li className="py-1 mb-2">Trademark Registration</li>
                                <li className="py-1 mb-2">Private Limited Company</li>
                                <li className="py-1 mb-2">Proprietorship firm</li>
                                <li className="py-1 mb-2">Limited Liability Partnership</li>
                                <li className="py-1 mb-2">GST Return Filing</li>
                                <li className="py-1 mb-2">Accounting & Booking</li>
                                <li className="py-1 mb-2">Become a Channel Partner</li>
                                <li className="py-1 mb-5">Loan</li>
                            </ul>
                            <div>
                                <h4>Trademark Registration</h4>
                                <ul className="list-unstyled pt-2">
                                    <li className="py-1 mb-2">Cochin</li>
                                    <li className="py-1 mb-2">Thrissur</li>
                                    <li className="py-1 mb-2">Chennai</li>
                                    <li className="py-1 mb-2">Coimbatore</li>
                                    <li className="py-1 mb-2">Madurai</li>
                                    <li className="py-1 mb-2">Hyderabad</li>
                                    <li className="py-1 mb-5">Bangalore</li>
                                </ul>
                            </div>
                            <div>
                                <h4>GST Registration</h4>
                                <ul className="list-unstyled pt-2">
                                    <li className="py-1 mb-2">Bangalore</li>
                                    <li className="py-1 mb-2">Hyderabad</li>
                                    <li className="py-1 mb-2">Kochi</li>
                                    <li className="py-1 mb-2">Calicut</li>
                                    <li className="py-1 mb-2">Thrissur</li>
                                    <li className="py-1 mb-2">Coimbatore</li>
                                    <li className="py-1 mb-5">Chennai</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-6 col-lg-3 text-lg-end">
                            <h4>Social Media</h4>
                            <div class="social-media pt-2  row justify-content-center">
                                <div class="col-1 mb-5 ms-3">
                                    <h3><FontAwesomeIcon icon={faMeta} /></h3>
                                </div>
                                <div class="col-1 mb-5 ms-3">
                                    <h3><FontAwesomeIcon icon={faInstagram} /></h3>
                                </div>
                                <div class="col-1 mb-5 ms-3">
                                    <h3><FontAwesomeIcon icon={faYoutube} /></h3>
                                </div>
                                <div class="col-1 mb-5 ms-3">
                                    <h3><FontAwesomeIcon icon={faLinkedin} /></h3>
                                </div>
                                <div class="col-1 mb-5 ms-3">
                                    <h3><FontAwesomeIcon icon={faEnvelope} /></h3>
                                </div>
                            </div>

                            <div>
                            <h4>Main Services</h4>
                            <ul className="list-unstyled pt-2">
                                <li className="py-1 mb-2">Incorporation</li>
                                <li className="py-1 mb-2">IPR</li>
                                <li className="py-1 mb-2">Taxes</li>
                                <li className="py-1 mb-5">Compliances Package</li>
                                
                            </ul>
                            <div>
                                <h4>Team and policies</h4>
                                <ul className="list-unstyled pt-2">
                                    <li className="py-1 mb-2">Privacy Policy</li>
                                    <li className="py-1 mb-5">Terms & Conditions</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Firm Registration</h4>
                                <ul className="list-unstyled pt-2">
                                    <li className="py-1 mb-2">Telangana</li>
                                    <li className="py-1 mb-2">Andra Pradesh</li>
                                    <li className="py-1 mb-5">Hyderabad</li>
                                </ul>
                            </div>

                            <div>
                                <h4>GST Filling</h4>
                                <ul className="list-unstyled pt-2">
                                    <li className="py-1 mb-5">GST Filling</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Virtual Accounting</h4>
                                <ul className="list-unstyled pt-2">
                                    <li className="py-1 mb-5">Virtual Accounting</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        

                    </div>
                    <hr />
                    <div className="d-sm-flex text-center justify-content-between py-1">
                        <p className="text-center">2024 ©. All Rights Reserved. </p>
                        <p>
                            <a href="#" className="text-light text-decoration-none pe-4">Terms of use</a>
                            <a href="#" className="text-light text-decoration-none"> Privacy policy</a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}


export default Footer