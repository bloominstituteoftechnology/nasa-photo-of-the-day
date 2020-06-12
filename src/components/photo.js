import React from 'react';
let today = new Date(); // CREATES THE DATE FOR TODAY
let dd = String(today.getDate()); // CONVERTS today variable TO DAY
let mm = String(today.getMonth() + 1); // CONVERTS today variable TO MONTH
let yyyy = today.getFullYear(); // CONVERTS today variable TO YEAR
today = mm + '-' + dd + '-' + yyyy; // CREATES DATE STRING FOR IMAGE QUERY. FORMAT: YYYY-MM-DD

const setParagraph = (paraMargin,paraHeight) => {
    return {
      p: {
        margin:paraMargin,
        'line-height':paraHeight
      }
    }
  }

function Photo(props) {


    return (
        <div>
        <h2>{props.imageOfTheDay.title}</h2><small>{`Nasa's Photo of the Day (${today})`}</small>
        <div className="clear"></div>
            { }

            {(props.imageOfTheDay.media_type === "image") &&
                <img className="img-fluid" src={props.imageOfTheDay.url} alt='' />
            }
            <div>

                <p className="lead" style={setParagraph('0 15%','2').p}>{props.imageOfTheDay.explanation}</p>

                {props.imageOfTheDay.copyright &&
                    < small >
                        Image Credit &amp; Copyright<br />
                        <a href='web.com'>{props.imageOfTheDay.copyright}</a>
                    </small>
                }
            </div>
        </div >
    );
}
export default Photo;