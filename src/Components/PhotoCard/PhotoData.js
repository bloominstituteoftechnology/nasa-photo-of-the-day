import React, { useState, useEffect } from "react";
import axios from "axios";
// import PhotoCard from "./PhotoCard";
import '../../css/index.css';
// import {Button, Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle,} from 'reactstrap';

export default function PhotoData() {

    const [photos, setPhotos] = useState([]);
    const [openDate, setOpenDate] = useState(true)
    const [date,setDate] = useState('')

    console.warn('state Open Button', openDate)

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=JnWo6HiIwC9BG0xa2UyobaexzaMVqCbQi9h9hs6q&date=${date}`)
        .then(res => {
            console.log(res.data);

            setPhotos(res.data);
        })
        .catch(error => {
      console.log(error);
        })

    }, [date])

    return (

      
            <div class="bg-white mt-4 ml-4 mb-64 w-11/12 rounded-lg overflow-hidden shadow-2xl">
                <img class="w-full" src={photos.hdurl}  alt="Nasa photo of the day" />
                <div class="h-3 px-6 py-4">
                    <div class="font-bold text-xl mb-2">{photos.title}  <div class="inline text-gray-500 text-sm p6">\ NASA photo of the day for {photos.date} </div></div>
                   
                </div>
                
                <div class="py-4">
                <button class="outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow" onClick={() => setOpenDate(!openDate)}>
                      Select a new date
                 </button>
              
               {/* Opened Button */ }

              { <div className={ `input ${openDate ? 'inputHide' : 'inputShow'}` }>
                 <input className="date-input" value={date} type='date'  onChange= { (e) => setDate(e.target.value) }/>
                   
                </div>}
                </div>
                <p class="px-8 text-gray-700 text-base text-justify">
                    {photos.explanation}
                    </p>

                <div class="px-6 py-4 ">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#space</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#nasa</span>


                    </div>
            </div>

   
    );
}

          {/* ********* ORIGINAL CODE WITHOUT STYLING LIBRARYS ************  */}

            {/* <div className="photo">
                 <PhotoCard 
                 props={photos.hdurl}  />
            </div>
            
            <div className="info">
            <Button color="primary" size="lg" onClick={() => setOpenDate(!openDate)}>
            {photos.date}
        </Button>
              
               {/* Opened Button */ }
{/* 
              { <div className={ `input ${openDate ? 'inputHide' : 'inputShow'}` }>
                 <input className="date-input" value={date} type='date'  onChange= { (e) => setDate(e.target.value) }/>
                   
                </div>
              }


                <h3 className="photoTitle">{photos.title}</h3>
                <p className="photoExplanation">{photos.explanation}</p>
            </div> */} 


                      {/* *********  CODE USING REACTSTRAP ************  */}



{/* 
            <div>

            <Card>
                <CardImg top width="100%" src={photos.hdurl} ></CardImg>
            </Card>
         

        <CardBody>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setOpenDate(!openDate)}>
                    {photos.date}
                </button>
                    {/* Opened Button */ }

                    {/* { <div className={ `input ${openDate ? 'inputHide' : 'inputShow'}` }>
                        <input className="date-input" value={date} type='date'  onChange= { (e) => setDate(e.target.value) }/>
                        
                        </div>
                    }
                <CardTitle>{photos.title}</CardTitle>
                <CardText>{photos.explanation}</CardText>
                
        </CardBody>
        <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Button
</button>
        <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="jane@example.com" />
        </div>
        </div> */}

      
        
    

