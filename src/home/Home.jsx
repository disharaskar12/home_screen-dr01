import React from "react";
import "./home.css";
import analytics from "../images/analytics.gif";
import creativity from "../images/creativity.gif";
import DE from "../images/DE.png";

const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="headline ">
          MAKE EVERYDAY LIFE MORE AFFORDABLE AND PROTECTED FOR CUSTOMERS.
        </div>

        <p >
          At <span> INFOBYTES TECHNOSYS </span>, we believe the future belongs
          to those who love the new. To people who enjoy the journey of business
          transformation. We develop some of the most sought-after solutions in
          Digital Product Engineering, Data Management & Analytics, Digital
          Enterprise, Digital Integration Services, Salesforce and Talent
          Solutions. With our experienced team, we can help clients deliver an
          unmatched end-customer experience. We’d love to enable clients
          business to embrace the dynamic and fast-evolving technology, at the
          speed of demand. We are having product like paytrakz for business to
          help there partnerships.
        </p>
      </div>

      <div className="container2 ">
        <img src={analytics} alt=" gif " />
        <div className="content">
          <h4 className="title">PayTrakz</h4>
          <h6>THE MOST POWERFUL PARTNERSHIP.</h6>
          <p className="content-home">
            PayTrakz is a partnership software having numerous features.
            Collectively, they help businesses across industries. PayTrakz app
            is built to serve every industry. It is customisable to meet the
            requirement of your business as per your unique business
            requirements. It helps,manage all of their partnership requirements.
          </p>
          <button
            className="centered-button"
            onClick={() =>
              (window.location.href =
                "https://www.infobytestechnosys.in/paytrakz.html")
            }
          >
            Read More
          </button>
        </div>
      </div>

      <div className="container3">
        <div className="image">
          <img src={DE} alt="Digital engg." className="image1" />
        </div>

        <div className="text">
          <img src={creativity} alt="gif " className="image2" />
          <h3>Digital Product Engineering:</h3>
          <p>
            Infobytes Technosys offers a host of highly flexible and adaptable
            solutions and services for businesses, from building new products to
            modernizing existing ones. High-value agile solutions that are built
            to match your speed of innovation.
          </p>

          <img src={creativity} alt="gif " className="image2" />
          <h3>Talent Solutions:</h3>
          <p>
            Optimize your organization’s workforce with reliable and skilled
            individuals via technology-driven, flexible talent solutions from
            Infobytes Technosys.
          </p>
        </div>
      </div>

      <div className="container4">
        <h5>
          <strong>Join Infobytes Tech world</strong>
        </h5>
        <p>
          {" "}
          IF YOU'RE PASSIONATE ABOUT TECHNOLOGY AND FINANCE, INFOBYTES TECHNOSYS
          IS THE PLACE TO BE. EXPLORE EXCITING CAREER OPPORTUNITIES AND BE PART
          OF OUR PIONEERING JOURNEY. JOIN US IN SHAPING THE FUTURE OF FINTECH!
        </p>
        {/* <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScHM22QHO8Id5CRZ3qTPcKB1fRV70I-zjE3niY77gojaBV8FA/viewform?usp=sf_link"
          class="button"
        >
          {" "}
          Apply for Fresher
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeH7Wacpq1F3zhgYmVzKanVRlUZZUUQht-oqdg0uBNB7Tzg2w/viewform?usp=sf_link"
          class="button"
        >
          Apply for Experience
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScN4IG-G0d0XJvZPAz4z4pIKEKvWUtw1kB56K1ESMK4yq-rxg/viewform?usp=sf_link"
          class="button"
        >
          {" "}
          Training cum Internship Program
        </a> */}
      </div>
    </section>
  );
};

export default Home;
