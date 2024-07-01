import React from "react";

function Ourservices() {
  return (
    <>
      <section id="our-services">
        <div className="head">
          <h3>Our Services</h3>
          <p>
            We have 24/7 care and support services with highly qualified staff;
            an accessible location of residence near the city. We organize
            various daily activities to boost your energy and mental health;
            including arts, gym sessions and outings. Below are some of the
            services that we provide.
          </p>
        </div>
        <div className="container owl-carousel owl-theme">
          <div className="row our-services-content">
            <div className="col-3">
              <div className="color1 rounded">
                <img src="./src/assets/independent-living.png" alt="" />
                <h4>Independent living support</h4>
                <p>
                  We offer a long term living accommodation and assistance in
                  either client's choice of living place or in our facilities.
                  We strongly support you living and wellbeing in the place you
                  find most comfortable.
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="color2 rounded">
                <img src="./src/assets/respite-care.png" alt="" />
                <h4>Respite care</h4>
                <p>
                  We have short term (Respite) accommodation services in our
                  facilities to support the need of you or your family. Short
                  term accommodation assistance is the care just like in your
                  home but away from your home.
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="color3 rounded">
                <img src="./src/assets/coordinate-support-service.png" alt="" />
                <h4>Coordinate support service</h4>
                <p>
                  We as a NDIS support provider can coordinate between the
                  agencies to offer best possible seervice assistance you can
                  have. We offer and assist you a long term solution to your
                  challenges.
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="color4 rounded">
                <img
                  src="./src/assets/social-participation-support.png"
                  alt=""
                />
                <h4>Social participation support</h4>
                <p>
                  We provide a network of support that assist our participants
                  to get out and engage in the community more. We offer you a
                  confident boost to get more outdoor and live your life in a
                  normal way.
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="color5 rounded">
                <img src="./src/assets/religious-support.png" alt="" />
                <h4>Religious support</h4>
                <p>
                  We respect people from all religious backgrounds and we aspire
                  to cater for your needs by taking you to the places of
                  worship. We value your religious beliefs and offer you freedom
                  to practice them.
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="color6 rounded">
                <img
                  src="./src/assets/recreational-activities-and-outings.png"
                  alt=""
                />
                <h4>Recreational activities and outings</h4>
                <p>
                  We involve you in recreational activities. Our clients love
                  Barbeque outing, Hiking trips, Fishing, Swimmimg, Movies,
                  attending Footie games and site-seeing.
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="color7 rounded">
                <img src="./src/assets/transportation.png" alt="" />
                <h4>Transportation</h4>
                <p>
                  We offer a transport services to overcome your transportation
                  challenges. We keep up with your entertainment needs by taking
                  your outing and involving in recreational activities.
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="color8 rounded">
                <img
                  src="./src/assets/training-education-and-skill-development.png"
                  alt=""
                />
                <h4>Training, Education and skill development</h4>
                <p>
                  We address your training needs where you think is the gap. We
                  strive to enhance your technological skill to adopt with
                  advanced life style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ourservices;
