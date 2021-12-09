import React, { useState } from "react";

const CopyRight = (props) => {
  const { copyRightOfImg } = props;
  return (
    <div>
      <p>{copyRightOfImg}</p>
    </div>
  );
};

export default CopyRight;
