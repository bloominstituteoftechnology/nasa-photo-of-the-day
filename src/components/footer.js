import React from "react";

const Footer = ({ propsMediaType, propsUrl }) => {
  return (
    <>
      <p>Media Type: {propsMediaType}</p>
      <p>URL: {propsUrl}</p>
    </>
  );
};

export default Footer;
