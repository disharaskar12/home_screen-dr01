import React from "react";
import onTD from "../src/images/onTD.png";
import s24x7 from "../src/images/24x7.jpg";
import tech from "../src/images/handimg.jpg";
import dev from "../src/images/developer.avif";
import sd1 from "../src/images/handshake.gif";
import sm1 from "../src/images/sm1.gif";
import target from "../src/images/target.gif";
import comp from "../src/images/computer.gif";
import techcare from "../src/images/tech-support.gif";
import clock from "../src/images/clock.gif";
import buble from "../src/images/a.jpg";
import orga from "../src/images/b.jpg";
import pass from "../src/images/c.jpg";

const Company = () => {
  const boldTextStyle = { fontWeight: "bold" };

  const carouselData = [
    {
      title: "TRANSPARENCY",
      content:
        "We are always open, honest, and collaborative in all our interactions with every team member, client, and industry peer.",
      image: buble,
    },
    {
      title: "ORGANISE",
      content: "We avoid complication and use technology to record and report.",
      image: orga,
    },
    {
      title: "PASSION",
      content: "We are driven by the love for our work, teams, and clients.",
      image: pass,
    },
  ];

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
      <div className="container mt-1 ">
        <div className="row">
          <div className="col">
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators ">
                {carouselData.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to={index.toString()}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : undefined}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {carouselData.map((item, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${
                      index === 0 ? "active" : ""
                    } rounded`}
                    data-bs-interval={index === 0 ? "10000" : "2000"}
                  >
                    <img
                      src={item.image}
                      className="rounded"
                      style={{
                        height: "400px",
                        objectFit: "cover",
                        width: "1300px",
                      }}
                      alt=""
                    />

                    <div className="carousel-caption ">
                      <h5
                        className="fw-bolder display-3 title-with-border"
                        style={boldTextStyle}
                      >
                        {item.title}
                      </h5>

                      <p style={{ fontSize: "1.25rem", ...boldTextStyle }}>
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-4 ms-1 me-1 border rounded ">
          <div className="col-md-6">
            <div class="v">
              <img
                src={dev}
                alt=""
                style={{ height: "350px", width: "600px" }}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="row mt-5">
              <h3 className="bold">BEST DEVELOPER</h3>
            </div>

            <div class="row mt-3">
              <div className="col-2">
                <img
                  src={sd1}
                  style={{ height: "60px", width: "60px" }}
                  alt=""
                />
              </div>
              <div className="col">
                <p>
                  <h5>Based on the client requirement, we develop </h5>
                  <h5 className=" "> the best software solution.</h5>
                </p>
              </div>
            </div>
            <div class="row mt-2">
              <div className="col-2">
                <img
                  src={sm1}
                  style={{ height: "60px", width: "60px" }}
                  alt=""
                />
              </div>
              <div className="col">
                <h5>
                  We prioritize client collaboration throughout the development
                  process, ensuring that every feature and functionality aligns
                  seamlessly with their goals and objectives.
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 ms-1 me-1 border rounded">
          <div className="col-md-2 order-md-2">
            <div class="v">
              <img
                src={onTD}
                alt=""
                style={{ height: "310px", width: "600px" }}
              />
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <div className="row mt-5">
              <h3 className="bold">ON TIME DEPLOYMENT</h3>
            </div>
            <div className="row mt-3">
              <div className="col-2">
                <img
                  src={comp}
                  style={{ height: "60px", width: "60px" }}
                  alt=""
                />
              </div>
              <div className="col">
                <p>
                  <h5>
                    Our dedicated team consistently strives to exceed
                    expectations, ensuring not only the quality of the product
                    but also its timely deployment.
                  </h5>
                </p>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-2">
                <img
                  src={target}
                  style={{ height: "60px", width: "60px" }}
                  alt=""
                />
              </div>
              <div className="col">
                <h5>
                  Timely deployment is ingrained in our development process, and
                  we continuously optimize our workflows to ensure our products
                  reach our clients precisely when they need them.
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 ms-1 me-1 border rounded ">
          <div className="col-md-6">
            <div class="v">
              <img
                src={s24x7}
                alt=""
                style={{ height: "350px", width: "600px" }}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="row mt-5">
              <h3 className="bold">24/7 SUPPORT</h3>
            </div>
            <div class="row mt-3">
              <div className="col-2">
                <img
                  src={techcare}
                  style={{ height: "60px", width: "60px" }}
                  alt=""
                />
              </div>
              <div className="col">
                <h5>
                  Our 24/7 availability is a testament to our commitment to
                  customer success, as we believe that offering continuous
                  support is essential in building lasting relationships with
                  those who trust in our products and services.
                </h5>
              </div>
            </div>
            <div class="row mt-2">
              <div className="col-2">
                <img
                  src={clock}
                  style={{ height: "60px", width: "60px" }}
                  alt=""
                />
              </div>
              <div className="col">
                <h5>
                  Providing exceptional customer service is at the core of our
                  values, and our round-the-clock support team is ready to go
                  above and beyond to resolve any challenges our customers may
                  encounter.
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <div className="card bg-transparent border-lg-5">
              <div className="card-body text-black d-flex flex-column align-items-center">
                <h3
                  className="card-title text-center text-dark mb-3 "
                  style={boldTextStyle}
                >
                  <strong>JOIN INFOBYTES TECH WORLD</strong>
                </h3>
                <div>
                  <img
                    src={tech}
                    className="card-img-top mt-4"
                    alt="joinus"
                    style={{ height: "350px", width: "700px" }}
                  />
                </div>
                <h5>
                  <p className="card-text mb-3" style={boldTextStyle}>
                    IF YOU'RE PASSIONATE ABOUT TECHNOLOGY AND FINANCE, INFOBYTES
                    TECHNOSYS IS THE PLACE TO BE. EXPLORE EXCITING CAREER
                    OPPORTUNITIES AND BE PART OF OUR PIONEERING JOURNEY. JOIN US
                    IN SHAPING THE FUTURE OF FINTECH!
                  </p>
                </h5>
                <div className="d-flex gap-5">
                  <a
                    class="btnn"
                    style={{ ...boldTextStyle, textDecoration: "none" }}
                    href="https://docs.google.com/forms/d/e/1FAIpQLScHM22QHO8Id5CRZ3qTPcKB1fRV70I-zjE3niY77gojaBV8FA/viewform?usp=sf_link"
                  >
                    APPLY HERE FOR FRESHERS
                  </a>
                  <a
                    class="btnn"
                    style={{ ...boldTextStyle, textDecoration: "none" }}
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeH7Wacpq1F3zhgYmVzKanVRlUZZUUQht-oqdg0uBNB7Tzg2w/viewform?usp=sf_link"
                  >
                    APPLY FOR EXPERIENCE
                  </a>
                  <a
                    class="btnn"
                    style={{ ...boldTextStyle, textDecoration: "none" }}
                    href="https://docs.google.com/forms/d/e/1FAIpQLScN4IG-G0d0XJvZPAz4z4pIKEKvWUtw1kB56K1ESMK4yq-rxg/viewform?usp=sf_link"
                  >
                    TRAINING CUM INTERNSHIP PROGRAM
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

export default Company;
