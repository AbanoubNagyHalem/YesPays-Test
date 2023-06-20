import { Fragment } from "react";
import classes from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.home}>
        <Link to="product">
          <button>Go to Product Page</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
