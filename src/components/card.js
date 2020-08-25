import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style.css'


const useStyles = makeStyles({
 
 
    root: {
      maxWidth: 800,
    },
    media: {
      height: 400,
    },
  });


function Card1(props) {
    const classes = useStyles();

    
   console.log(props)




    return (
       <div className="check">
         <Card className={classes.root}>
     
        <CardMedia
          className={classes.media}
          image={props.nasa.hdurl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.nasa.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                {props.nasa.explanation}
          </Typography>
        </CardContent>
      
    </Card>
       </div>
    )
}

export default Card1
