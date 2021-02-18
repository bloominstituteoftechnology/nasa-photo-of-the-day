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
            <button onClick={() => openDetails(props.data.date)}>
                See Details
            </button>
        </div>)
    }

    const Details = props =>{
        return (
            <div className='wrapper'>
                <h2>The photographer is {props.copyright}</h2>
                {props &&
                <>
                  <p>{props.explanation}</p>
                  <p>Photo was featured on {props.date}</p>
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
