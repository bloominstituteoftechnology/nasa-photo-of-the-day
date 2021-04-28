import React, { useState } from 'react';
import axios from 'axios';

function Description (props) {
  const { explanation } = props.props;
  return (
    <div>
      <h3>Description</h3>
      <p>{explanation}</p>
    </div>

  )
}

export default Description;
