import React from "react";

export default function Date({ photo }) {
  return (
      <div className="date-layout">
        <p>{photo.date}</p>
      </div>
  );
}