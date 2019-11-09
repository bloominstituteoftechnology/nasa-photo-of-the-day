import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const ImgCard = (props) =>{
    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
      
    const classes = useStyles();

    

    return (

        <Grid item xs={12} sm={6} lg={3} >
            <Paper className={classes.paper}>
            <a href={props.url} target="_blank"><img src={props.url} alt={props.title} /></a>
            <div>
                <h3>{props.title}</h3>
                <p>{props.date}</p>
                <div className="imgChips">
                {props.imgKeywords.map(item=>{
                  return <Chip className="imgChip" label={item} variant="outlined"/>
                  })
                }
                </div>
            </div>
            </Paper>
        </Grid>

    );
};

export default ImgCard;