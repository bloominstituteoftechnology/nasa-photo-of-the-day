import React from "react";
import './bottomContent.css';
import {formatDate} from'../../data';

function BottomContent({
  explanation,
  media_type,
  url,
  hdUrl,
  date,
  title,
  copyright
}) {
  return (
    <div class="content">
      <p className="silent">{formatDate(date)}</p>
      <h2 class="text-title">{title}</h2>
      <p class="text-body">{explanation}</p>
      <p className="silent">Photographed by {copyright}</p>
    </div>
  );
}


export default BottomContent;