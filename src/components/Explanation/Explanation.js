import React, { useState } from "react";

const Explanation = (props) => {
  const { imgExplanation } = props;
  return (
    <div>
      <p> {imgExplanation}</p>
    </div>
  );
};

export default Explanation;
