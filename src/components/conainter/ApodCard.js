import React from "react"

const ApodCard = props => {
    // console.log(props);
   

    return (
        <div className="nasa-image"
        style={{
            display:"flex",
            flexDirection:"column",
            width:"50vw",
            alignItems:"center",
            justifyContent:"center",
            // border:"1px red solid"

        }}
        >
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <div className="content"
            style={{
                width:"100%",
            }}
            >
                <img src={props.image} alt="{nasa.title}"
                style={{
                    width:"50%",
                    borderRadius:"5px"
                }}
                 />
             <p style={{
                 width:"100%",
                 
             }}>{props.exp}</p>
            </div>
        </div>
    );
};

export default ApodCard;