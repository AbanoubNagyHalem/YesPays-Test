import React, { Component } from "react";
import classes from "./ProductDetails.module.scss";
import { DUMMY_PRODUCTS } from "../services/DummyProducts";
import ProductImageGallery from "./ProductImageGallery";

export class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      quantityCount: 1,
    };
  }

  addToCartHandler = (pr) => {
    const productQuantity = this.state.quantityCount;
    this.props.receiveProduct(pr, productQuantity);
  };

  increaseCount = () => {
    this.setState({ quantityCount: this.state.quantityCount + 1 });
  };

  decreaseCount = () => {
    this.setState({ quantityCount: this.state.quantityCount - 1 });
  };

  render() {
    const DataProduct = DUMMY_PRODUCTS.find(
      (product) => product.id === this.props.productId
    );
    return (
      <section className={classes["productDetails"]}>
        <ProductImageGallery images={DataProduct.img} />
        <div className={classes["sub-details"]}>
          <div className={classes["details"]}>
            <div className={classes["logImg"]}>
              <img
                src="images/bys-r9sdu-main-2e18457b9e044a85831cbb5e2380af62.png"
                alt="brand"
              />
            </div>
            <p className={classes.title}>{DataProduct.title}</p>
            <div className={classes.rate}>
              <div className={classes.star}>No Rating Yet</div>
            </div>
            <div className={classes.price}>
              <h2>
                {DataProduct.price} <span>EGP</span>
              </h2>
            </div>
          </div>
          <div className={classes.color}>
            <p
              className={`${classes.title} text-muted`}
              style={{
                fontWeight: "500",
              }}
            >
              Color:
              <span
                style={{
                  color: "#000",
                  marginLeft: "4px",
                  fontWeight: "500",
                }}
              >
                baby blue
              </span>{" "}
            </p>
            <div>
              <img src="images/Group 354.png" alt="color" />
              <img src="images/Group 356.png" alt="color" />
            </div>
          </div>
          <div className={classes.size}>
            <p
              className={`${classes.title} text-muted`}
              style={{
                fontWeight: "500",
              }}
            >
              Size:{" "}
              <span
                style={{
                  color: "#000",
                  marginLeft: "4px",
                  fontWeight: "500",
                }}
              >
                m
              </span>{" "}
            </p>
            <div
              style={{
                margin: "9px",
              }}
            >
              {DataProduct.size.map((size, index) => (
                <button key={index}>{size}</button>
              ))}
            </div>
          </div>

          <div className={classes.quantity}>
            <p
              className={`${classes.title} text-muted`}
              style={{
                fontWeight: "500",
              }}
            >
              Quantity
            </p>
            <div>
              <div className={classes["btn-quantity"]}>
                <button className={classes.btnOne} onClick={this.increaseCount}>
                  +
                </button>

                <div>{this.state.quantityCount}</div>
                <button
                  onClick={this.decreaseCount}
                  disabled={this.state.quantityCount === 1}
                  className={classes.btnOne}
                >
                  -
                </button>
              </div>
            </div>
            <div className={classes["btn-action"]}>
              <button onClick={() => this.addToCartHandler(DataProduct)}>
                Add To Cart
              </button>
              <button class="Quantity_toggleWishlist__hhXri">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.69001C1 3.60001 3.49 1.10001 6.56 1.10001C8.38 1.10001 9.99 1.98001 11 3.34001C12.01 1.98001 13.63 1.10001 15.44 1.10001C18.51 1.10001 21 3.60001 21 6.69001C21 13.69 14.52 17.82 11.62 18.81Z"
                    stroke="#1E1E1E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <button class="Quantity_shareProduct__3pzS8">
                <svg
                  width="22"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.2499 3.99994C21.2499 5.79492 19.795 7.25006 18 7.25006C16.205 7.25006 14.7501 5.79492 14.7501 3.99994C14.7501 2.20514 16.205 0.75 18 0.75C19.795 0.75 21.2499 2.20514 21.2499 3.99994V3.99994Z"
                    fill="white"
                  ></path>
                  <path
                    d="M18 8.00006C15.7939 8.00006 14.0001 6.20599 14.0001 3.99994C14.0001 1.79407 15.7939 0 18 0C20.2061 0 21.9999 1.79407 21.9999 3.99994C21.9999 6.20599 20.2061 8.00006 18 8.00006ZM18 1.5C16.621 1.5 15.5001 2.62207 15.5001 3.99994C15.5001 5.37799 16.621 6.50006 18 6.50006C19.379 6.50006 20.4999 5.37799 20.4999 3.99994C20.4999 2.62207 19.379 1.5 18 1.5Z"
                    fill="white"
                  ></path>
                  <path
                    d="M21.2499 20.0001C21.2499 21.7949 19.795 23.25 18 23.25C16.205 23.25 14.7501 21.7949 14.7501 20.0001C14.7501 18.2051 16.205 16.7499 18 16.7499C19.795 16.7499 21.2499 18.2051 21.2499 20.0001V20.0001Z"
                    fill="white"
                  ></path>
                  <path
                    d="M18 24C15.7939 24 14.0001 22.2059 14.0001 20.0001C14.0001 17.794 15.7939 15.9999 18 15.9999C20.2061 15.9999 21.9999 17.794 21.9999 20.0001C21.9999 22.2059 20.2061 24 18 24ZM18 17.4999C16.621 17.4999 15.5001 18.622 15.5001 20.0001C15.5001 21.3779 16.621 22.5 18 22.5C19.379 22.5 20.4999 21.3779 20.4999 20.0001C20.4999 18.622 19.379 17.4999 18 17.4999V17.4999Z"
                    fill="white"
                  ></path>
                  <path
                    d="M7.25006 12C7.25006 13.795 5.79492 15.2499 3.99994 15.2499C2.20514 15.2499 0.75 13.795 0.75 12C0.75 10.205 2.20514 8.75006 3.99994 8.75006C5.79492 8.75006 7.25006 10.205 7.25006 12Z"
                    fill="white"
                  ></path>
                  <path
                    d="M3.99994 15.9999C1.79407 15.9999 0 14.2061 0 12C0 9.79395 1.79407 8.00006 3.99994 8.00006C6.20599 8.00006 8.00006 9.79395 8.00006 12C8.00006 14.2061 6.20599 15.9999 3.99994 15.9999ZM3.99994 9.50006C2.62097 9.50006 1.5 10.6219 1.5 12C1.5 13.3781 2.62097 14.4999 3.99994 14.4999C5.37909 14.4999 6.50006 13.3781 6.50006 12C6.50006 10.6219 5.37909 9.50006 3.99994 9.50006Z"
                    fill="white"
                  ></path>
                  <path
                    d="M6.36107 11.5201C6.01299 11.5201 5.67498 11.339 5.49096 11.0151C5.21795 10.5361 5.38604 9.92506 5.86504 9.65095L15.1439 4.36103C15.6229 4.08601 16.2339 4.2541 16.508 4.73494C16.7811 5.21394 16.613 5.82496 16.134 6.09907L6.85491 11.389C6.6989 11.478 6.52898 11.5201 6.36107 11.5201V11.5201Z"
                    fill="white"
                  ></path>
                  <path
                    d="M15.639 19.7701C15.471 19.7701 15.301 19.728 15.145 19.639L5.86597 14.3491C5.38697 14.076 5.21906 13.465 5.49207 12.9849C5.76398 12.505 6.37592 12.336 6.85602 12.611L16.1351 17.9009C16.6141 18.1739 16.782 18.785 16.509 19.2651C16.324 19.589 15.986 19.7701 15.639 19.7701V19.7701Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDetails;
