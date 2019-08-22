import React, { Fragment } from "react";
import notFound from "../../img/404.png";

export default () => {
  return (
    <Fragment>
      {/* <h1 className="display-4"><b>404</b>Page Not Found</h1>
      <br />
      <p>Sorry, this page does not exist</p>
      <small className="lead">That's all we know</small> */}
      <img src={notFound} />
    </Fragment>
  );
};
