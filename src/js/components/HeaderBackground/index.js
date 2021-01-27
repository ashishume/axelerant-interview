import React, { Fragment } from "react";
import HeaderCard from "../HeaderCard";
import "./styles.scss";
const HeaderBackground = () => {
  return (
    <Fragment>
      <div className="header_container">
        <div className="layer">
          <div className="inside_container">
            <div className="sub_header">
              <span className="header_text">
                Integer bibendum sit amet arcu vel egestas.
              </span>
            </div>
            <div className="box_container">
              <HeaderCard title="Services" iconName="fa fa-users-cog" />
              <HeaderCard title="Services" iconName="fas fa-user-cog" />
              <HeaderCard title="Services" iconName="fas fa-user-lock" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderBackground;
