import React, { useState, useEffect } from "react";
import "../CSS/Herosection.css";

function Herosection() {
    const [text, setText] = useState("Tax Filing");
    const alternateTexts = ["Compliance", "Incorporation", "Tax Filing"];
    let index = 0;

    useEffect(() => {
        const intervalId = setInterval(() => {
            index = (index + 1) % alternateTexts.length;
            setText(alternateTexts[index]);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);


    const testimonials = [
        { name: 'John Doe', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', pic: "https://www.bizpole.in/images/navy.png" },
        { name: 'Jane Smith', review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', pic: "https://www.bizpole.in/images/Nilesh-Kadam-Delpick-Photo.png" },
        { name: 'Alice Johnson', review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', pic: "https://www.bizpole.in/images/Nilesh-Kadam-Delpick-Photo.png" },
        { name: 'Bob Williams', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', pic: "https://www.bizpole.in/images/navy.png" },
        { name: 'Emily Brown', review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', pic: "https://www.bizpole.in/images/Nilesh-Kadam-Delpick-Photo.png" },
        { name: 'Michael Wilson', review: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.', pic: "https://www.bizpole.in/images/navy.png" },
        { name: 'Sarah Martinez', review: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.', pic: "https://www.bizpole.in/images/Nilesh-Kadam-Delpick-Photo.png" },
        { name: 'David Jones', review: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?', pic: "https://www.bizpole.in/images/navy.png" }
    ];



    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <h1 className={"display-4 fw-bold"} id="herotext">{text}</h1>
                        <h1 className="display-4 fw-bold" id="herotext2">Made easy</h1>
                        <p>Start, run and grow your business with ease.</p>
                        <button className="herobtn btn btn-success">Explore services</button>
                    </div>
                    <div className="col-sm-auto ms-auto">
                        <video className="img-fluid" width={400} autoPlay loop muted playsInline onError={(e) => console.error("Video error:", e)}>
                            <source src="../Media/Videos/herosectionvideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>


            {/* Facts Start */}

            <div className="facts" data-parallax="scroll" data-image-src="img/facts.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="facts-item">
                                <i className="flaticon-home"></i>
                                <div className="facts-text">
                                    <h3 className="facts-plus" data-toggle="counter-up">12000+</h3>
                                    <p>Customers served</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="facts-item">
                                <i className="flaticon-charity"></i>
                                <div className="facts-text">
                                    <h3 className="facts-plus" data-toggle="counter-up">75%</h3>
                                    <p>Customers recommend us</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="facts-item">
                                <i className="flaticon-kindness"></i>
                                <div className="facts-text">
                                    <h3 className="facts-plus" data-toggle="counter-up">50+</h3>
                                    <p>Cities across India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="facts-item">
                                <i className="flaticon-donation"></i>
                                <div className="facts-text">
                                    <h3 className="facts-plus" data-toggle="counter-up">4.6+</h3>
                                    <p>Google ratings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Facts End */}

            {/* Clients Reviews Start*/}

            <div className="clientheading container">
                <h1 className="clientheadinginner mb-5">Here's why our clients love us</h1>
            </div>

            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {testimonials.map((testimonial, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card mb-3" id="tcard">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={testimonial.pic} className="testimonialimg card-img" alt={testimonial.name} />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body" id="tcardbody">
                                                        <h5 className="card-title">{testimonial.name}</h5>
                                                        <p className="card-text">{testimonial.review}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {index + 1 < testimonials.length && (
                                        <div className="col-md-6">
                                            <div className="card mb-3" id="tcard">
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <img src={testimonials[index + 1].pic} className="testimonialimg card-img" alt={testimonials[index + 1].name} />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body" id="tcardbody">
                                                            <h5 className="card-title">{testimonials[index + 1].name}</h5>
                                                            <p className="card-text">{testimonials[index + 1].review}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            {/* Clients Reviews End*/}

            {/* Journey Details and Packages Start */}

            <div className="clientheading container">
                <h1 className="clientheadinginner">Entrepreneurship is a journey.</h1>
                <h1 className="clientheadinginner">We make it easier.</h1>
            </div>

            <div className="container">
                <section className="d-flex">
                    <div className="left">
                        <div className="inner sticky">
                            <div className="journeyvideo col-sm-auto">
                                <video className="img-fluid" width={400} autoPlay loop muted playsInline onError={(e) => console.error("Video error:", e)}>
                                    <source src="../Media/Videos/1_img.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="inner">
                            <h1 className="journeytitle">Stress-free Business</h1>
                            <h1 className="journeytitle">Registration</h1>
                            <p className="journeytitlep">An SME entrepreneur can obtain all registrations and licenses required to start his business from Bizpole.</p>
                            <button className="journeybtn">Register your business</button>

                        </div>
                    </div>
                </section>
                <section className="d-flex">
                    <div className="left">
                        <div className="inner sticky">
                            <div className="journeyvideo col-sm-auto">
                                <video className="img-fluid" width={400} autoPlay loop muted playsInline onError={(e) => console.error("Video error:", e)}>
                                    <source src="../Media/Videos/1_img.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="inner">
                            <h1 className="journeytitle">Stress-free Business</h1>
                            <h1 className="journeytitle">Registration</h1>
                            <p className="journeytitlep">An SME entrepreneur can obtain all registrations and licenses required to start his business from Bizpole.</p>
                            <button className="journeybtn">Register your business</button>

                        </div>
                    </div>
                </section>
                <section className="d-flex">
                    <div className="left">
                        <div className="inner sticky">
                            <div className="journeyvideo col-sm-auto">
                                <video className="img-fluid" width={400} autoPlay loop muted playsInline onError={(e) => console.error("Video error:", e)}>
                                    <source src="../Media/Videos/3_img.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="inner">
                            <h1 className="journeytitle">Cost-effective</h1>
                            <h1 className="journeytitle">Compliance Packages</h1>
                            <p className="journeytitlep">We can make him compliant with legal compliances and tax filings in a single subscription.</p>
                            <button className="journeybtn">Get Complaint</button>

                        </div>
                    </div>
                </section>
                <section className="d-flex">
                    <div className="left">
                        <div className="inner sticky">
                            <div className="journeyvideo col-sm-auto">
                                <video className="img-fluid" width={400} autoPlay loop muted playsInline onError={(e) => console.error("Video error:", e)}>
                                    <source src="../Media/Videos/4_img.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="inner">
                            <h1 className="journeytitle">Find the Perfect Loan</h1>
                            <h1 className="journeytitle">for Your Needs</h1>
                            <p className="journeytitlep">Looking for a loan can be overwhelming, but Bizpole Capital simplifies the process. We offer a variety of loan options for different needs and our experts are there to guide you throughout. Get started with a stress-free experience and find the perfect loan solution for you today.</p>
                            <button className="journeybtn">Get Loan</button>

                        </div>
                    </div>
                </section>
            </div>

            {/* Journey Details and Packages End */}

            {/* Deliver & Services Start */}

            <div className="container services">
                <h1 className="text-center servicemaintitle">We deliver what you need</h1>
                <p className="text-center mb-5 servicemainpara">Our most in-demand services</p>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card text-white  h-100 servicecard1" id="servicecard">
                            <div className="card-body" id="servicecardbody">
                                <h1 className="card-title text-center">Trademark Registration</h1>
                                <p className="card-text text-center">Building a brand is an essential step, but protecting it with trademark registration is also key. Trademark registration online provides legal backing for your brand so that you can be sure to keep out all those who run the risk of using your name and work.</p>
                                <div className="card-btn-container" id="servicecardbtncontainer">
                                    <button className="cardbtn servicecardbtn1" id="servicecardbtn">Apply Now</button>
                                </div>
                                <h6 className="mt-2 text-center"><i>Starting from Rs. 6,499/-</i></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white h-100 servicecard2" id="servicecard">
                            <div className="card-body" id="servicecardbody">
                                <h1 className="card-title text-center">Private Limited Company</h1>
                                <p className="card-text text-center">Business registration has never been easier. Simplified company formation procedure makes it possible for you to register your company within hours and make your entrepreneurial dream true.</p>
                                <div className="card-btn-container" id="servicecardbtncontainer">
                                    <button className="cardbtn servicecardbtn2" id="servicecardbtn">Register your company</button>
                                </div>
                                <h6 className="mt-2 text-center"><i>Starting from Rs. 3,999/-</i></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white  h-100 servicecard3" id="servicecard">
                            <div className="card-body" id="servicecardbody">
                                <h1 className="card-title text-center">Proprietorship firm</h1>
                                <p className="card-text text-center">Sole Proprietorship registration is the simplest way to start and run a business in India. It involves minimum paperwork and minimal cost, which makes it the most preferred option among startups</p><br /><br />
                                <div className="card-btn-container" id="servicecardbtncontainer">
                                    <button className="cardbtn servicecardbtn3" id="servicecardbtn">Start your Business</button>
                                </div>
                                <h6 className="mt-2 text-center"><i>Starting from Rs. 1,999/-</i></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white h-100 servicecard4" id="servicecard">
                            <div className="card-body" id="servicecardbody">
                                <h1 className="card-title text-center">Limited Liability Partnership</h1>
                                <p className="card-text text-center">LLP is a new form of doing business that combines the legal and tax advantages of a limited liability company (LLC) with the management flexibility, reduced costs and quasi-corporate structure of a partnership.</p>
                                <div className="card-btn-container" id="servicecardbtncontainer">
                                    <button className="cardbtn servicecardbtn4" id="servicecardbtn">Set up an LLC</button>
                                </div>
                                <h6 className="mt-2 text-center"><i>Starting from Rs. 3,999/-</i></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white  h-100 servicecard5" id="servicecard">
                            <div className="card-body" id="servicecardbody">
                                <h1 className="card-title text-center">GST Return</h1>
                                <h1 className="card-title text-center">Filing</h1>
                                <p className="card-text text-center">Taxation is a major responsibility of all entrepreneurs and professionals alike. Registration. Be it returns or payments, we help you with the hassle free and timely filing of GST.</p>
                                <div className="card-btn-container" id="servicecardbtncontainer">
                                    <button className="cardbtn servicecardbtn5" id="servicecardbtn">File GST Online</button>
                                </div>
                                <h6 className="mt-2 text-center"><i>Starting from Rs. 350/- (Monthly)</i></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white h-100 servicecard6" id="servicecard">
                            <div className="card-body" id="servicecardbody">
                                <h1 className="card-title text-center">Accounting & Bookkeeping</h1>
                                <p className="card-text text-center">Accounting is not just about recording the transactions, but also about managing your funds effectively. With timely accounting of all financial transactions, you can keep your focus on core business and ensure error-free accounting.</p>
                                <div className="card-btn-container" id="servicecardbtncontainer">
                                    <button className="cardbtn servicecardbtn6" id="servicecardbtn">Hire Us</button>
                                </div>
                                <h6 className="mt-2 text-center"><i>Starting from Rs. 999/-</i></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Deliver & Services End */}


            {/* Discover the Experience Start */}

            <div className="container discover">
                <h1 className="text-center discovermaintitle">Discover the Bizpole Experience</h1>
                <p className="text-center discovermainpara">Bringing every entrepreneurial dream to life</p>
            </div>

            <div className="container discoverwithvideos">
                <div className="wrapper">
                    <div className="advideo1">
                        <video className="img-fluid" width={400} autoPlay loop muted playsInline onError={(e) => console.error("Video error:", e)}>
                            <source src="../Media/Videos/1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="context3">
                        <h1 className="discovertitle">Reduce your administrative costs by 50%</h1>
                        <p className="discoverpara">Bizpole is a comprehensive business hub that eliminates the need for you to go to multiple service providers for your business needs. Our comprehensive range of services enable you to manage your company’s financials, legal compliance and registrations in one place, saving you time and money.</p>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="advideo2">
                        <video className="img-fluid" width={400} autoPlay loop muted playsInline onError={(e) => console.error("Video error:", e)}>
                            <source src="../Media/Videos/3.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="context2">
                        <h1 className="discovertitle">Saving 70% of your Time Spent on Administrative Work</h1>
                        <p className="discoverpara">Imagine being able to work on what matters most to you, leaving the rest up to Bizpole. That's our mission. To free entrepreneurs from the day-to-day hassles of running a business so they can do more of what they love and accomplish their goals faster.</p>
                    </div>
                </div>

                <div className="wrapper" id="wrapper3">
                    <div className="advideo3">
                        <video className="img-fluid" width={400} autoPlay loop muted playsInline onError={(e) => console.error("Video error:", e)}>
                            <source src="../Media/Videos/4.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="context3">
                        <h1 className="discovertitle">Championing Customer Excellence</h1>
                        <p className="discoverpara">We know that a business is only as good as the people behind it. That's why Bizpole representatives work as a part of your team, not just ours. We don't just offer you products and services—we help you make them happen.</p>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="advideo4">
                        <video className="img-fluid" width={400} autoPlay loop muted playsInline onError={(e) => console.error("Video error:", e)}>
                            <source src="../Media/Videos/5.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="context4">
                        <h1 className="discovertitle">No Hidden Cost</h1>
                        <p className="discoverpara">We want you to know exactly what you're paying for. There are no hidden fees or last minute costs, and we’ve made our pricing as easy to understand as possible.</p>
                    </div>
                </div>
            </div>
            <div className="container startbtn">
                <button className="btn startactbtn">Get Started</button>
            </div>

            {/* Discover the Experience Start */}

        </div>
    );
}

export default Herosection;
