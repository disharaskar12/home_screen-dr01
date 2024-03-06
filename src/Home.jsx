import React from "react";
import pic from "../src/images/DE.png";
import analyitc from "../src/images/analytics.gif";
import creative from "../src/images/creativity.gif";

const Home = () => {
  const boldTextStyle = { fontWeight: "bold" };

  return (
    <section
      id="header"
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
        <div className="row row-cols-1 g-4">
          <div className="col">
            <div className="card mb-3 bg-transparent border-0">
              <div className="card-body text-dark">
                <h2 className="card-title text-center mb-4">
                  <strong>
                    MAKE EVERYDAY LIFE MORE AFFORDABLE AND PROTECTED FOR
                    CUSTOMERS.
                  </strong>
                </h2>
                <p>
                  <span>
                    <h5 className="card-text text-center">
                      At <span className="brand-name">INFOBYTES TECHNOSYS</span>
                      , we believe the future belongs to those who love the new.
                      To people who enjoy the journey of business
                      transformation. We develop some of the most sought-after
                      solutions in Digital Product Engineering, Data Management
                      & Analytics, Digital Enterprise, Digital Integration
                      Services, Salesforce and Talent Solutions. With our
                      experienced team, we can help clients deliver an unmatched
                      end-customer experience. We’d love to enable clients
                      business to embrace the dynamic and fast-evolving
                      technology, at the speed of demand. We are having product
                      like paytrakz for business to help there partnerships.
                    </h5>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-2 bg-transparent border-lg-5">
              <div className="card-body text-black">
                <div className="ms-5">
                  <div>
                    <h4>
                      <img
                        src={analyitc}
                        style={{ height: "60px", width: "60px" }}
                        alt=""
                      />
                      <strong className="paytrak ms-2 text-dark text-decoration-underline-bg-primary">
                        PayTrakz
                      </strong>{" "}
                    </h4>
                    <a href="/paytrakz" className="ms-5">
                      <button type="button" class="btn btn-info" style={boldTextStyle}>
                        Read More
                      </button>
                    </a>
                  </div>

                  <div className="ms-0 mt-4">
                    <p style={boldTextStyle}>THE MOST POWERFUL PARTNERSHIP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4 ms-1 me-1 border rounded ">
            <div className="col-md-6 d-flex justify-content-center ">
              <img
                src={pic}
                alt=""
                style={{ height: "370px", width: "550px" }}
              />
            </div>

            <div className="col-md-5">
              <div className="row mt-5 ms-5">
                <h3 className="bold ms-4">
                  <strong>Digital Product Engineering:</strong>
                </h3>
              </div>
              <div class="row mt-3">
                <div className="col-2">
                  <img
                    src={creative}
                    style={{ height: "60px", width: "60px" }}
                    alt=""
                  />
                </div>
                <div className="col">
                  <h5>
                    {" "}
                    Infobytes Technosys offers a host of highly flexible and
                    adaptable solutions and services for businesses, from
                    building new products to modernizing existing ones.
                    High-value agile solutions that are built to match your
                    speed of innovation.
                  </h5>
                </div>
              </div>
              <div class="row mt-2">
                <div className="row mt-5 ms-5">
                  <h3 className="bold ms-4">
                    <strong>Talent Solutions: </strong>
                  </h3>
                </div>
                <div className="col-2">
                  <img
                    src={creative}
                    style={{ height: "60px", width: "60px" }}
                    alt=""
                  />
                </div>
                <div className="col">
                  <h5>
                    Optimize your organization’s workforce with reliable and
                    skilled individuals via technology-driven, flexible talent
                    solutions from Infobytes Technosys.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card bg-transparent border-lg-5">
              <div className="card-body text-black d-flex flex-column align-items-center">
                <h3
                  className="card-title text-center text-dark mb-3"
                >
                  <strong>Join Infobytes Tech world</strong>
                </h3>
                <h5>
                  <p
                    className="card-text text-center mb-3"
                    style={boldTextStyle}
                  >
                    IF YOU'RE PASSIONATE ABOUT TECHNOLOGY AND FINANCE, INFOBYTES
                    TECHNOSYS IS THE PLACE TO BE. EXPLORE EXCITING CAREER
                    OPPORTUNITIES AND BE PART OF OUR PIONEERING JOURNEY. JOIN US
                    IN SHAPING THE FUTURE OF FINTECH!
                  </p>
                </h5>
                <div className="d-flex gap-5">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScHM22QHO8Id5CRZ3qTPcKB1fRV70I-zjE3niY77gojaBV8FA/viewform?usp=sf_link"
                    className="text-decoration-none"
                  >
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      class="btnn"
                      style={{ ...boldTextStyle, textDecoration: "none" }}
                    >
                      Apply for Fresher
                    </button>
                  </a>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeH7Wacpq1F3zhgYmVzKanVRlUZZUUQht-oqdg0uBNB7Tzg2w/viewform?usp=sf_link"
                    className="text-decoration-none"
                  >
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      class="btnn"
                      style={{ ...boldTextStyle, textDecoration: "none" }}
                    >
                      Apply for Experience
                    </button>
                  </a>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScN4IG-G0d0XJvZPAz4z4pIKEKvWUtw1kB56K1ESMK4yq-rxg/viewform?usp=sf_link"
                    className="text-decoration-none"
                  >
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      class="btnn"
                      style={{ ...boldTextStyle, textDecoration: "none" }}
                    >
                      Training cum Internship Program
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
