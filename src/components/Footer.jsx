import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={classes["all-footer"]}>
        <div className={classes["top-footer"]}>
          <div className={classes["section1"]}>
            <img src="images/Group 1436.png" alt="yeshtery logo" />
            <div>
              <p>
                This is an exclusive online platform providing the consumer with
                a convenient way of shopping from stores while in the
                convenience of their home. Supporting the latest brands and
                products available in the stock real time.
              </p>
            </div>
          </div>

          <div className={classes["section2"]}>
            <div className={classes.subscribe}>
              <p> Subscribe to our newsletter</p>
              <form className={classes.forma}>
                <input type="text" placeholder="Enter Your Mail" />
                <button className="subscribe-icon" type="submit">
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    Subscribe
                  </p>
                  <img src="images/Group 1431.png" alt="Subscribe icon" />
                </button>
              </form>
            </div>
            <div className={classes.links}>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Track Order</li>
                <li>Sell With Us</li>
                <li>Shipping And Returns</li>
              </ul>
              <hr />
              <ul className={classes["social-icons"]}>
                <li>
                  <img src="images/Group 1432.png" alt="" />
                  <p>Facebook</p>
                </li>
                <li>
                  <img src="images/Group 1433.png" alt="" />

                  <p>Instagram</p>
                </li>
                <li>
                  <img src="images/Group 1435.png" alt="" />
                  <p>Youtube</p>
                </li>
                <li>
                  <img src="images/Group 1435.png" alt="" />
                  <p>Linkedin</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className={classes["bottom-footer"]}>
          <div>&#169; 2023 yeshtery, all rights reserved. </div>
          <div>
            <ul>
              <img src="images/Rectangle 586.png" alt="cash on delivery icon" />
              <img src="images/Group 1437.png" alt="visa icon" />
              <img src="images/Group 1438.png" alt="master card icon" />
            </ul>
          </div>
          <div>
            <p>Powered By</p>
            <img src="images/Group 1439.png" alt="nasnav logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
