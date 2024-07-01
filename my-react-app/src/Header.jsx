import React from "react";

function Header() {
  return (
    <>
      <div id="top">
        <div id="sub">
          <div className="sub-contact">
            <img src="./src/assets/mail.png" alt="" />
            <p>
              <a
                href="https://admin@stewartlodge.com.au"
                className="text-white text-decoration-none"
              >
                admin@stewartlodge.com.au
              </a>
            </p>
          </div>
          <div className="sub-contact ms-5">
            <img src="./src/assets/call.png" alt="" />
            <p className="text-white">+61 39387 6942</p>
          </div>
        </div>
        <div id="li">
          <ul>
            <li>
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.support.google.com">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="https://www.instagram.com">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- go down arrow --> */}

        <div>
          <a href="#footer" id="warning" className="btn btn-info text-white">
            <i className="fa-solid fa-arrow-down"></i>
          </a>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* <!-- Offcanvas toggle button --> */}
          <button
            className="navbar-toggler navbar-toggler-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon navbar-toggler-black"></span>
          </button>
          {/* <!-- Offcanvas navbar --> */}
          <div
            className="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header bg-light text-black">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close text-reset btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body bg-light text-black">
              <ul className="navbar-nav">
                <li className="nav-item me-5 ms-5">
                  <a
                    className="navbar-brand"
                    href="https://www.stewartlodge.com.au/"
                  >
                    <img
                      className="ms-3"
                      src="./src/assets/logo-top.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-black fw-bold text-decoration-none mt-3 me-2"
                    href="https://www.stewartlodge.com.au/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-decoration-none text-black mt-3 me-2"
                    href="https://www.stewartlodge.com.au/philosophy/"
                  >
                    Philosophy
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-decoration-none text-black mt-3 me-2"
                    href="https://www.stewartlodge.com.au/services/"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-decoration-none text-black mt-3 me-2"
                    href="https://www.stewartlodge.com.au/community-services/"
                  >
                    Community & Activities
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-decoration-none text-black mt-3 me-2"
                    href="https://www.stewartlodge.com.au/contact/"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
