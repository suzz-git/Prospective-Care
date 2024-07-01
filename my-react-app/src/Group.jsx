import React from "react";

function Group() {
  return (
    <>
      <div className="row" id="group">
        <div className="text col">
          <h2>Welcome to Prospective Care</h2>
          <p>
            We deliver the care and assistance to fulfil your requirements to
            get what you want. “achieve your goals and meet your needs”
          </p>
          <div className=" sub-divs">
            <div className="png col-2">
              <img src="./src/assets/case.png.png" alt="" />
            </div>
            <div className="explain col-10">
              <h3>What we offer?</h3>
              <p>
                To enhance the unique personality you have, Prospective Care
                serve the holistic care and support to the participants that are
                with NDIS. We provide the services that help to ensure all your
                support needs are met, to enhance your day-to-day life. We
                deliver the consistent care, skill development strategies and
                community involvement activities to boost the enjoyment in your
                life.
              </p>
            </div>
          </div>
          <div className="sub-divs row">
            <div className="png col-2">
              <img src="./src/assets/case.png.png" alt="" />
            </div>
            <div className="explain col-9">
              <h3>What we do?</h3>
              <p>
                We help people with different disabilities to have comfortable
                and supportive living through the services of individualized
                care and by addressing their unique requirements.
              </p>
            </div>
          </div>
          <div className="sub-divs row">
            <div className="png col-2">
              <img src="./src/assets/case.png.png" alt="" />
            </div>
            <div className="explain col-9">
              <h3>Why we stand out? Tell me more</h3>
              <p>
                We have a 24 -hour service of care and support with highly
                qualified staff; an accessible location of residence near the
                city. We organize various daily activities to boost your energy
                and mental health; including arts, gym sessions and outings.
                Services include in-home podiatrist, doctors, physiotherapists,
                psychologists, occupational therapists and registered nurses
                making sure that your physical as well as psychological needs
                are met. Social activities include gatherings, cultural
                integration, movie nights, and church sessions to address the
                religious beliefs and practices.
              </p>
            </div>
          </div>
        </div>
        <div className="image col">
          <img src="./src/assets/group.png" alt="group photo" />
        </div>
      </div>
    </>
  );
}
export default Group;
