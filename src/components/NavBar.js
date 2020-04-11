import React from "react";
import './navBar.css';
// material-ui imports
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const NavBar = () => {
 return (
     <div className="navMain">
         <p>this is a nav bar</p>
         <List disablePadding dense>
             <ListItem button>
                 <ListItemText>Home</ListItemText>
             </ListItem>
         </List>
     </div>
 )
}

export default NavBar