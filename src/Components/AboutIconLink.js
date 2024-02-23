import React from "react";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="d-flex justify-content-end me-3">
      <Link to="/about">
        <i className="fs-1 bi bi-question-octagon-fill"></i>
      </Link>
    </div>
  );
}

export default AboutIconLink;
