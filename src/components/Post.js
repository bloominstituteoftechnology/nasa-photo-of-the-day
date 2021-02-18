import React, {useState} from 'react'


const Post = props => {
    
    const [infoOpen, setInfoOpen ] = useState(false)

    const openButton = () => setInfoOpen(!infoOpen)

    const{url, data, setCurrentDate} = props
    console.log(`the props are`,props)



    const Info = props => {   //this is the open button on the page
      return ( 
        <div className='info'>
            {
              infoOpen && <Details />
            }
            <button onClick={openButton}>
                {openButton === false ? 'Show Details' : 'Hide Details'}
            </button>
        </div>)
    }

    const Details = props =>{ //Info of the photographer
        return (
            <div className='wrapper'>
                <h2>The photographer is {data.copyright}</h2>
                {props &&
                <>
                  <p>{data.explanation}</p>
                  <p>Photo was featured on {data.date}</p>
                </>
                }
               
            </div>
        )
    }

    return(
    <div className='container'>
      <h1>{data.title}</h1>
      <div className='imgContainer'>
        <img src={url} ></img>
      </div>
      <div>
          <Info />
          
          
      </div>
    </div>
  
  )
}

export default Post
