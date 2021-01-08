import React from "react";

export default function Copyright(props) {
  return (
    <div>
      {props.data.copyright && <p>Copyright: {props.data.copyright}</p>}
    </div>
  );
}
