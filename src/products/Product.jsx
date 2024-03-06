import React from "react";
import gif from "../images/payTrakz_gif.mp4";
import Pimg from "../images/payment-method-credit-card-svgrepo-com.svg";
import Pimg1 from "../images/product_1.jpg";
import Pimg2 from "../images/product_2.jpg";
import Pimg3 from "../images/product_3.jpg";
import Pimg4 from "../images/product_4.jpg";
import paytrakz from "../images/payTrakz_image.jpg"
import "./product.css";

const Product = () => {
  return (
    <div id="back" className="back">
      <header className="header">
        <strong>
          <h2>PRODUCTS</h2>
        </strong>
      </header>
      <div id="hero" className="products-hero">
        <div className="product-container">
          
          
          <div className="content2">
          
            PayTrakz is a partnership software having numerous features.
            Collectively, they help businesses across industries. PayTrakz app
            is built to serve every industry. It is customizable to meet the
            requirement of your business as per your unique business
            requirements. It helps manage all of their partnership requirements.
         
          <img id="img1" className="img" src={Pimg} alt="pay" />
        </div>
      </div>
      </div>

      <section className="product-section">
        <div className="product-text">
          <p>
            It includes investment graphs, projected and invested amounts,
            project insights, budget information, and transaction details for
            various individuals. The interface also features options for adding
            entries and viewing statistics.
          </p>
        </div>
        <div className="product-image">
          <img src={Pimg1} alt="product1" />
        </div>
      </section>

      <section className="product-section">
        <div className="product-image">
          <img src={Pimg2} alt="product2" />
        </div>
        <div className="product-text">
          <p>
            It includes options for day, week, month, and year, as well as
            sections for reports, profit shares, expenses, net analysis,
            transactions, issues, and documents. It also includes a section for
            inward and outward transactions with specific details such as names
            and amounts. The interface seems to be related to financial and
            project management.
          </p>
        </div>
      </section>

      <section className="product-section">
        <div className="product-text">
          <p>
            Transaction details for the purchase of construction material. It
            includes information such as the party name, transaction item,
            quantity, rate per unit, date, amount, transaction category,
            transaction type, GST, and partner's status. The interface also
            includes options to approve, review, or decline the transaction.
          </p>
        </div>
        <div className="product-image">
          <img src={Pimg3} alt="product3" />
        </div>
      </section>

      <section className="product-section">
        <div className="product-image">
          <img src={Pimg4} alt="product4" />
        </div>
        <div className="product-text">
          <p>
            It shows a list of transactions with details such as date, category,
            and status for each transaction. The interface includes options for
            searching, adding entries, and viewing statistics. The font and
            design seem to be part of a graphical user interface.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Product;
