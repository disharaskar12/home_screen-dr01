import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="section mt-0 mb-0"
      style={{
     
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        padding: "20px",
        borderRadius: "15px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-black" >
              <strong>About Us</strong>
            </h2>
            <h5>
              <p className="text-black" >
                <strong>Professional Trainers</strong>
                <br />
                We have a team of best corporate trainers with 9-10 years of
                experience in the IT industry.
                <br />
                <br />
                <strong>Flexible Time</strong>
                <br />
                Training period time is flexible as per your requirement and
                schedule.
                <br />
                <br />
                <strong>Real-Time Projects</strong>
                <br />
                After training, we guide you to develop a full-fledged project
                by assigning real-time projects.
              </p>
            </h5>
          </div>
          <div className="col">
            <h2 className="text-black" >
              <strong>Contact Us</strong>
            </h2>
            <h5>
              <p className="text-black" >
                <a href="/"><strong>InfobytesTechnosys.in</strong></a>
                <br />
                <br />
                MailId: infobytestechnosys@gmail.com
              </p>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
