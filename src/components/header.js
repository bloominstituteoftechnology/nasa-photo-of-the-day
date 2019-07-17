import React from "react";

const Header = ({ propsDate, propsTitle, propsExplanation }) => {
  return (
    <>
      <button onClick={ () => alert(propsDate) }>Date</button>
      <button onClick={ () => alert(propsTitle) }>Title</button>
      <button onClick={ () => alert(propsExplanation) }>Explanation</button>
    </>
  );
};

export default Header;
