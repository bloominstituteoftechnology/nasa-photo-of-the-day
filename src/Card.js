mport React from 'react'; 

export default function Card (props) {
    const{photo,title,content} = props
    return (
        <div>
            <img src ={photo.url} alt = "sky full of start"/>
                <h1>{title.title}</h1>
                <h2>{photo.date}</h2>
                <p>{content.explanation}</p>
        </div>  
    )   
}