import React from "react";
import classes from "./ProductCard.module.scss";

const ProductCard = ({ data, recieveProductData }) => {
  return (
    <div className={classes.card} onClick={() => recieveProductData(data.id)}>
      <div className={classes["main-img"]}>
        <img
          src={data.img[0]}
          alt="product image"
          className={classes["product-img"]}
        />
      </div>
      <div className={classes["card-body"]}>
        <h2>{data.title}</h2>
        <div className={classes["section-two"]}>
          <div className={classes.price}>
            <h3>
              {data.price} <span>LE</span>
            </h3>
          </div>
          <img src="images/logobrand.png" alt="brand logo" />
        </div>
        <div className={classes.rate}>
          <div className={classes.star}>No Rating Yet</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
