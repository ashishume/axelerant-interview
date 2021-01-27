import React from "react";
import "./styles.scss";
import companyLogo from "../../../assets/map.jpg";

const WorldMapDescription = () => {
  return (
    <div className="map_container">
      <div className="map_row">
        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English Lorem Ipsum has been the industry's standard
        </p>
      </div>
      <div className="map_row">
        <img src={companyLogo} className="image_map" />
      </div>
    </div>
  );
};

export default WorldMapDescription;
