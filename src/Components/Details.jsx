import React from "react";
import "./Details.css";

const Details = props => {
  return (
    <div className="info-container">
      {/* <h3>Pick a date!</h3> */}
      <h2>{props.title}</h2>
      <p>{props.explanation}</p>
    </div>
  );
};

export default Details;


/* <h2>UGC 12591: The Fastest Rotating Galaxy Known</h2>
      <p>
        Why does this galaxy spin so fast? To start, even identifying which type
        of galaxy UGC 12591 is difficult -- featured on the lower left, it has
        dark dust lanes like a spiral galaxy but a large diffuse bulge of stars
        like a lenticular. Surprisingly observations show that UGC 12591 spins
        at about 480 km/sec, almost twice as fast as our Milky Way, and the
        fastest rotation rate yet measured. The mass needed to hold together a
        galaxy spinning this fast is several times the mass of our Milky Way
        Galaxy. Progenitor scenarios for UGC 12591 include slow growth by
        accreting ambient matter, or rapid growth through a recent galaxy
        collision or collisions -- future observations may tell. The light we
        see today from UGC 12591 left about 400 million years ago, when trees
        were first developing on Earth.
      </p> */