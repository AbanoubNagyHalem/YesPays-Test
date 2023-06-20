import React, { Component, Fragment } from "react";
import CategoryNav from "../components/CategoryNav";
import ProductSlider from "../components/ProductSlider";
import classes from "./Product.module.scss";
import MainHead from "../components/MainHead";
import TopNav from "./../components/TopNav";
import NavBar from "./../components/NavBar";
import Footer from "../components/Footer";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";
import NoRating from "../components/NoRating";
import Specifications from "../components/Specifications";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countQuantity: 0,
      showCart: false,
      productId: 1,
      cartItems: [],
    };
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  showCartHandler = (isShown) => {
    this.setState({ showCart: isShown });
  };

  showProductDetails = (productId) => {
    this.setState({ productId: productId });
  };

  addToCartHandler = (product, quantity) => {
    const itemIndex = this.state.cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (itemIndex !== -1) {
      const updatedCartItems = [...this.state.cartItems];
      updatedCartItems[itemIndex].quantity += quantity;
      this.setState({ cartItems: updatedCartItems });
    } else {
      product.quantity = quantity;
      this.setState({ cartItems: [...this.state.cartItems, product] });
    }
  };

  removeFromCart(itemToRemoveId) {
    console.log("ITEM REMOVED FROM CART id = " + itemToRemoveId);
    const updatedCartItems = this.state.cartItems.filter(
      (item) => item.id !== itemToRemoveId
    );
    this.setState({ cartItems: updatedCartItems });
  }

  render() {
    let count = 0;
    for (let i = 0; i < this.state.cartItems.length; i++) {
      const item = this.state.cartItems[i];
      count += item.quantity;
    }
    return (
      <Fragment>
        <header>
          <MainHead count={count} showcart={this.showCartHandler} />
          <NavBar />
          <CategoryNav />
        </header>

        <ProductDetails
          productId={this.state.productId}
          receiveProduct={this.addToCartHandler}
        />

        {this.state.showCart && (
          <Cart
            items={this.state.cartItems}
            removeHandler={this.removeFromCart}
            showcart={this.showCartHandler}
          />
        )}
        <Specifications />
        <NoRating />
        <div className={classes.container}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: 0,
              marginBottom: "4px",
              textTransform: "capitalize",
            }}
          >
            Similar Products
          </h1>
          <p
            style={{
              color: "#575756",
              fontSize: "22px",
              marginBottom: "16px",
            }}
          >
            You may like these products also
          </p>
        </div>
        <ProductSlider recieveId={this.showProductDetails} />

        <Footer />
      </Fragment>
    );
  }
}

export default Product;
