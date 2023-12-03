import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="container bg-dark">
                <footer className="">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-2 mb-3">
                            <h5 className='text-white'>Quick Link</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="text-white nav-link p-0">Service</a></li>
                                <li className="nav-item mb-2"><a href="#" className="text-white nav-link p-0 ">portfolio</a></li>
                                <li className="nav-item mb-2"><a href="#" className="text-white nav-link p-0 ">About Us</a></li>
                                <li className="nav-item mb-2"><a href="#" className="text-white nav-link p-0 ">Contact Us</a></li>
                                <li className="nav-item mb-2"><a href="#" className="text-white nav-link p-0 ">About</a></li>
                            </ul>
                        </div>
                        <div className="col-md-5 offset-md-1 mb-3">
                      
                                <h5 className='text-white'>Address</h5>
                                <p className='text-white'>Design Agency Head Office </p>
                                <p className='text-white'>Airport Road</p>
                                <p className='text-white'>United Arab Emiratre</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p className='text-white' >© Copy Right Design Agency 2023.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
                            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
                            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;
