// 🍒 APP.JS🍒

//👷‍♀️ STEP 1 BUILD COMPONENTS IN NEW FOLDER, ---> header.js,  NasaPhotos.js
      //header will hold your header📝
      //NasaPhotos will hold content and its layout via "html"📝

//STEP 2  INSTALL AXIOS, IMPORT AXIOS/ LINE 5
       // npm install axios, if not in json📝

//STEP 3 SET STATE, AND USE EFFECT IN REACT IMPORT/ LINE 1

//STEP 4 IMPORT COMPONENTS FROM FOLDER INTO APP.JS LINE 6-8
        // delete what is inside of return, want to start fresh, we don't want to see the "go read readme" message!📝

// STEP 5 set a state inside the function it can be anything just set it, it could be an empty array [], or null / line 14

//STEP 6 make promise in order to axios.get (linkurl) 
      // make a promise, but remember they must be made inside an useEffect with an empty array after .catch📝 // line 15-23

//👷‍♀️ STEP 7 add context to the 'return / lines 29-29

// 🍒 NASAPHOTOS.JS🍒
{/* <div>
            <h1></h1>
            <p>{data.date}</p>

            <div className="image">
            <a href = {data.url}>
                <img src = {data.url}></img>
             </a>   
            </div>

            <div className="title">
            <b>{data.title}</b>
            
            <br></br>
            <b>Image Credit & Copyright: {data.copyright}</b>
            </div>

            <div className="explanation">
            <p><b> Explanation: </b>{data.explanation}</p>
            </div>
        </div> */}