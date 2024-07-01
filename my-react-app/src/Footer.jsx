import React from "react";

function Footer() {
  return (
    <>
      <section id="footer">
        <div className="foot">
          <div className="logo">
            <img src="./src/assets/logo.png" alt="" />
            <p className="my-3">
              Prospective care is a proud provider of support services that
              include but not limited to constantly supporting individuality and
              independence of people who have disability. We strive to
              constantly improve your quality of life through our dedicated and
              compassionate service deliveries.
            </p>
          </div>
          <div className="contact">
            <h3 className="text-decoration-underline">CONTACT</h3>
            <div className="sub-contact">
              <img src="./src/assets/location.png" alt="" />
              <a
                className="text-white mb-3"
                href="https://www.google.com/maps/place/85+Stewart+St,+Brunswick+VIC+3056,+Australia/@-37.8650558,144.7119721,11z/data=!4m20!1m13!4m12!1m4!2m2!1d85.3840056!2d27.6956062!4e1!1m6!1m2!1s0x6ad6435129d75067:0xe4cc31bcb86d381e!2s85+Stewart+St,+Brunswick+VIC+3056,+Australia!2m2!1d144.9694383!2d-37.7640364!3m5!1s0x6ad6435129d75067:0xe4cc31bcb86d381e!8m2!3d-37.7640364!4d144.9694383!16s%2Fg%2F11cs8jpp13?entry=ttu"
              >
                85 Stewart St, Brunswick VIC 3056 Australia
              </a>
              {/* <p>85 Stewart St, Brunswick VIC 3056 Australia</p> */}
            </div>
            <div className="sub-contact">
              <img src="./src/assets/call.png" alt="" />
              <a className="text-white mb-3" href="tel:61 39387 6942">
                +61 39387 6942
              </a>
            </div>
            <div className="sub-contact">
              <img src="./src/assets/mail.png" alt="" />
              <p>
                <a
                  href="mailto:admin@stewartlodge.com.au"
                  className="text-white text-decoration-none"
                >
                  admin@stewartlodge.com.au
                </a>
              </p>
            </div>
          </div>
          <div className="follow">
            <h3 className="text-decoration-underline">FOLLOW US</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com">
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
              {/* <!-- go top arrow --> */}
              <a id="danger" href="#top" className="btn btn-info">
                <i className="fa-solid fa-arrow-up"></i>
              </a>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
