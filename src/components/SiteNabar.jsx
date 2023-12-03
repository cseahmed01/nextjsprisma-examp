"use client";

import Link from 'next/link';
import Image from 'next/image';


const SiteNavbar = () => {
  return (
    <div className="container border border-bottom" style={{ backgroundColor: '#D7F5DC' }}>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            style={{ fontWeight: 'bold', fontSize: '20px' }}
          >
            <Image
              src="/Frame8.png"
              width={100}
              height={35}
              alt="Picture of the author"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  <strong>Home</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/team">
                  <strong>Team</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/service">
                  <strong>Service</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/project">
                  <strong>Project</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/testimonal">
                  <strong>Testimonial</strong>
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-outline-success"
              style={{ marginRight: '10px' }}
            >
              Login
            </button>
            <button type="button" className="btn btn-success">Registration</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SiteNavbar;
