import React from "react";

import "./Toast.css";

const Toast = props => {
  return <div className={props.type}>{props.message}</div>;
};

export default Toast;
