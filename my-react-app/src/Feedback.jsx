import React from "react";

function Feedback() {
  return (
    <>
      <div className="row" id="feedback">
        <div className=" col palceholders">
          <h2>Have any feedback?</h2>
          <p>
            Addressing your feedback and accommodating your unique need are our
            constant attempt to improve our services. You can help us to know
            more about your need by filling the feedback form below.
          </p>
          <div>
            <div className="place">
              <div className="name">
                <input className="rounded" type="text" placeholder="Name" />
                <input className="rounded" type="email" placeholder="Email" />
              </div>
              <input
                className="rounded"
                id="subject"
                type="text"
                placeholder="Subject"
              />
              {/* <!-- <input id="messege" type="text" placeholder="" /> --> */}
              <textarea
                name=""
                placeholder="Give your Feedback here in detail"
                rows="5"
                className="form-control my-3"
              ></textarea>
            </div>
            <a href="#" className="mt-2 btn btn-primary">
              SEND MESSEGE
            </a>
          </div>
        </div>
        <div className="col">
          <img src="./src/assets/feedback.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Feedback;
