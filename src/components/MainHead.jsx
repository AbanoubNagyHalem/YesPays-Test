import React from "react";
import classes from "./MainHead.module.scss";

const MainHead = ({ count, showcart }) => {
  const showCart = () => {
    showcart(true);
  };
  return (
    <div className={classes["middleHead"]}>
      <div className={classes["mainHead"]}>
        <div className={classes.logo}>
          <img
            className={classes.icons}
            src="images/Group 770.png"
            alt="menu"
          />
          <img src="images/Group 1436.png " alt="logo" />
        </div>
        <div className={classes.searchInp}>
          <i>
            <img src="images/search.png" alt="search icon" />
          </i>
          <input
          className={classes.placeholder}
            type="text"
            placeholder="Search"
            style={{
              background: "white",
            }}
          />
        </div>
        <ul className={classes.iconsProduct}>
          <li onClick={showCart}>
            <div>
              <div style={{
                background:"#fff"
              }}>{count}</div>
              <span class="icon me-0 me-sm-2 position-relative ">
                <svg
                  fill="#fff100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="29.903"
                  height="24"
                  viewBox="0 0 29.903 24"
                >
                  <path
                    d="M3438.544,406.339a1.179,1.179,0,0,0-.957-.491h-5.335l-7.514-9.393-.005-.006-.048-.054-.035-.037a.406.406,0,0,0-.037-.034c-.018-.017-.035-.033-.054-.048l-.006-.005-.025-.018a.686.686,0,0,0-.065-.047l-.038-.023c-.02-.012-.04-.025-.061-.036l-.049-.023c-.018-.008-.036-.017-.054-.024l-.059-.022-.047-.016-.065-.016-.046-.011-.064-.01-.049-.007c-.02,0-.04,0-.06,0l-.055,0-.054,0c-.021,0-.041,0-.061,0l-.049.007-.065.01-.045.011-.065.016-.047.016-.059.022c-.018.007-.036.016-.054.024l-.049.023c-.021.011-.041.024-.061.036l-.038.023c-.023.015-.044.031-.066.047l-.024.018-.006.005c-.019.015-.037.032-.055.048s-.025.022-.036.034-.023.025-.035.038-.033.035-.048.053l0,.006-7.514,9.393h-5.335a1.182,1.182,0,0,0-1.12,1.554l3.935,11.8a1.181,1.181,0,0,0,1.12.807h19.672a1.181,1.181,0,0,0,1.12-.807l3.935-11.8A1.179,1.179,0,0,0,3438.544,406.339Zm-14.728-7.257,5.413,6.766H3418.4Zm8.986,18.57H3414.83l-3.147-9.443h24.266Z"
                    transform="translate(-3408.865 -396.013)"
                  ></path>
                </svg>
              </span>
            </div>
            <p
              style={{
                color: "white",
              }}
            >
              Cart
            </p>
          </li>
          <li
            style={{
              color: "white",
            }}
          >
            <i>
              <span class="infoItem_icon__KzEVs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.765"
                  height="24"
                  viewBox="0 0 25.765 24"
                  fill="#fff100"
                >
                  <path
                    d="M3537.769,398.3h0a7.159,7.159,0,0,0-10.49,0l-.269.284-.268-.282a7.16,7.16,0,0,0-10.122-.372q-.194.178-.373.372a8.04,8.04,0,0,0,0,10.886l9.927,10.468a1.138,1.138,0,0,0,.8.358h.031a1.141,1.141,0,0,0,.788-.313l9.971-10.516A8.039,8.039,0,0,0,3537.769,398.3Zm-1.489,9.471-.178-.168-9.092,9.59-9.092-9.588a5.71,5.71,0,0,1,0-7.729,4.833,4.833,0,0,1,3.381-1.562c.066,0,.133,0,.2,0a4.833,4.833,0,0,1,3.3,1.29c.1.088.188.181.278.278l1.108,1.168a1.18,1.18,0,0,0,1.663-.005l1.1-1.164a4.864,4.864,0,0,1,6.876-.276c.1.088.189.18.278.277a5.65,5.65,0,0,1,0,7.725Z"
                    transform="translate(-3514.125 -396.013)"
                  ></path>
                </svg>
              </span>
            </i>
            Wishlist
          </li>
          <li
            style={{
              color: "white",
            }}
          >
            <i>
              <span class="infoItem_icon__KzEVs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff100"
                >
                  <path
                    d="M3663.132,407.618a6.59,6.59,0,1,0-8.537,0,12.019,12.019,0,0,0-7.731,11.214,1.18,1.18,0,0,0,1.18,1.181h21.639a1.181,1.181,0,0,0,1.181-1.181A12.019,12.019,0,0,0,3663.132,407.618Zm-8.5-5.015a4.229,4.229,0,1,1,4.23,4.229A4.235,4.235,0,0,1,3654.634,402.6Zm-5.338,15.049a9.64,9.64,0,0,1,19.135,0Z"
                    transform="translate(-3646.864 -396.013)"
                  ></path>
                </svg>
              </span>
            </i>{" "}
            Login
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainHead;
