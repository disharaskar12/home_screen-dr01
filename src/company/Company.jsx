import React from "react";
import "./company.css";
import { useState, useEffect } from "react";
import buble from "../images/a.jpg";
import orga from "../images/b.jpg";
import pass from "../images/c.jpg";
import dev from "../images/developer.avif";
import hand from "../images/handshake.gif";
import first from "../images/first.jpg";
import s24 from "../images/24x7.jpg";
import clock from "../images/clock.gif";
import tech from "../images/tech-support.gif";
import ontd from "../images/onTD.png";
import sm1 from "../images/sm1.gif";
import comp from "../images/computer.gif";
import target from "../images/target.gif";
import han from "../images/handimg.jpg";
export default function Company() {
  const boldTextStyle = { fontWeight: "bold" };

  const Carousel = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    };

    const prevSlide = () => {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + data.length) % data.length
      );
    };
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change the interval duration (in milliseconds) as needed

      return () => clearInterval(interval);
    }, [currentSlide]);

    return (
      <div className="carousel">
        <button onClick={prevSlide} className="nav-button">
          &#8249;
        </button>
        <div className="slide">
          <img
            src={data[currentSlide].image}
            alt={data[currentSlide].title}
            className="slide-image "
          />
          <div className="content1">
            <h2>{data[currentSlide].title}</h2>
            <p>{data[currentSlide].content}</p>
          </div>
        </div>
        <button onClick={nextSlide} className="nav-button">
          &#8250;
        </button>
      </div>
    );
  };

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
    <div id="company">
      <div className="firstdiv">
        <Carousel data={carouselData} />
      </div>

      <div id="custom-row">
        <div class="custom-col-md-5">
          <div class="custom-row mt-5">
            <h3 class="bold">BEST DEVELOPER</h3>
          </div>
          <div class="custom-row1 ">
            <div class="custom-col-2">
              <img src={hand} alt="" />
            </div>
            <div class="custom-col">
             
                <h5 className="text">
                  Based on the client requirement, we develop the best software
                  solution{" "}
                </h5>
            
            </div>
          </div>
          <div class="custom-row1 ">
            <div class="custom-col-2">
              <img src={sm1} alt="" />
            </div>
            <div class="custom-col">
              <h5 className="text">
                We prioritize client collaboration throughout the development
                process, ensuring that every feature and functionality aligns
                seamlessly with their goals and objectives.
              </h5>
            </div>
          </div>
        </div>
        <div class="custom-col-md-6">
          <div class="v">
            <img src={dev} alt="" />
          </div>
        </div>
      </div>

      <div id="custom-row">
        <div class="custom-col-md-5">
          <div class="custom-row mt-5">
            <h3 class="bold">ON TIME DEPLOYMENT</h3>
          </div>
          <div class="custom-row1 ">
            <div class="custom-col-2">
              <img src={comp} alt="" />
            </div>
            <div class="custom-col">
              <h5 className="text">
                Our dedicated team consistently strives to exceed expectations,
                ensuring not only the quality of the product but also its timely
                deployment.
              </h5>
            </div>
          </div>
          <div class="custom-row1">
            <div class="custom-col-2">
              <img src={target} alt="" />
            </div>
            <div class="custom-col">
              <h5 className="text">
                Timely deployment is ingrained in our development process, and
                we continuously optimize our workflows to ensure our products
                reach our clients precisely when they need them.
              </h5>
            </div>
          </div>
        </div>
        <div class="custom-col-md-6">
          <div class="v">
            <img src={ontd} alt="" />
          </div>
        </div>
      </div>

      <div id="custom-row">
        <div class="custom-col-md-5">
          <div class="custom-row mt-5">
            <h3 class="bold">24x7 SUPPORT</h3>
          </div>
          <div class="custom-row1 ">
            <div class="custom-col-2">
              <img src={tech} alt="" />
            </div>
            <div class="custom-col">
              <h5 className="text">
                Our 24/7 availability is a testament to our commitment to
                customer success, as we believe that offering continuous support
                is essential in building lasting relationships with those who
                trust in our products and services.
              </h5>
            </div>
          </div>
          <div class="custom-row1">
            <div class="custom-col-2">
              <img src={clock} alt="" />
            </div>
            <div class="custom-col">
              <h5 className="text">
                Providing exceptional customer service is at the core of our
                values, and our round-the-clock support team is ready to go
                above and beyond to resolve any challenges our customers may
                encounter.
              </h5>
            </div>
          </div>
        </div>
        <div class="custom-col-md-6">
          <div class="v">
            <img src={s24} alt="" />
          </div>
        </div>
      </div>

      <div class="custom-row11">
        <div class="custom-col1">
          <div class="custom-card">
            <div class="custom-card-body custom-text-black custom-flex-column custom-align-items-center">
              <h3 class="custom-card-title custom-text-center custom-text-dark ">
                <strong>JOIN INFOBYTES TECH WORLD</strong>
              </h3>
              <div>
                <img src={han} class="custom-card-img-top mt-4" alt="joinus" />
              </div>
              <h5>
                <p class="custom-card-text mb-3">
                  IF YOU'RE PASSIONATE ABOUT TECHNOLOGY AND FINANCE, INFOBYTES
                  TECHNOSYS IS THE PLACE TO BE. EXPLORE EXCITING CAREER
                  OPPORTUNITIES AND BE PART OF OUR PIONEERING JOURNEY. JOIN US
                  IN SHAPING THE FUTURE OF FINTECH!
                </p>
              </h5>
              <div class="custom-flex gap-5">
                <a
                  class="btnn"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScHM22QHO8Id5CRZ3qTPcKB1fRV70I-zjE3niY77gojaBV8FA/viewform?usp=sf_link"
                >
                  APPLY HERE FOR FRESHERS
                </a>
                <a
                  class="btnn"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeH7Wacpq1F3zhgYmVzKanVRlUZZUUQht-oqdg0uBNB7Tzg2w/viewform?usp=sf_link"
                >
                  APPLY FOR EXPERIENCE
                </a>
                <a
                  class="btnn"
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
  );
}
