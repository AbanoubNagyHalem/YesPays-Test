import React, { Component } from "react";
import classes from "./NoRating.module.scss";

export default class NoRating extends Component {
  render() {
    return (
      <div>
        <section className={classes.container}>
          <div className={classes.ProductReviews}>
            <p className={classes.EmptyFallback}>No Rating Yet</p>
          </div>
        </section>
      </div>
    );
  }
}
