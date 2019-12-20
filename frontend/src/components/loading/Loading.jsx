import React from "react";
import { CubeSpinner } from "react-spinners-kit";

const Loading = () => (
  <div
    style={{ height: "50vh" }}
    className="d-flex justify-content-center align-items-center"
  >
    <CubeSpinner size={20} frontColor="#1a97aa" backColor="#ddd" loading />
  </div>
);

export default Loading;
