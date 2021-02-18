import React from "react";

const Header = (props) => {
  const { data } = props;
  const style = {
    width: "100%",
    backgroundColor: "#0B3D91",
    height: "120px",
  };

  return (
    <div className="header-cont" style={style}>
      <div className="header">
        <span className="date" style={{ color: "#FC3D21", fontSize: "20px" }}>
          {data.date || "Loading...."}
        </span>
        <h1 className="Title" style={{ color: "#FC3D21", fontSize: "40px" }}>
          {" "}
          NASA's Photo of the day{" "}
        </h1>
      </div>
    </div>
  );
};

export default Header;
