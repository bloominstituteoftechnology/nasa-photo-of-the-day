import React from 'react'


const Post = props => {

    const openDetails = date => {
        setCurrentDate()
    }

    const closeDetails = () => {setCurrentDate(null)};

    const{url, data, setCurrentDate} = props
    console.log(`the props are`,props)

    const Info = props => {
      return ( 
        <div className='info'>
            <button onClick={() => openDetails(data.date)}>
                See Details
            </button>
        </div>)
    }

    const Details = props =>{
        return (
            <div className='wrapper'>
                <h2>The photographer is {data.copyright}</h2>
                {props &&
                <>
                  <p>{data.explanation}</p>
                  <p>Photo was featured on {data.date}</p>
                </>
                }
                <button onClick={closeDetails}>Close</button>
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
          {
              data.date && <Details />
          }
          
      </div>
    </div>
  
  )
}

export default Post
