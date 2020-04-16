import React from "react";
import './navBar.css';

// material-ui imports
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function NavBar({ items }) {
    return (
        <div className="navMain">
            <div>
                <p>A logo image will go here</p>
            </div>
            <List disablePadding dense>
                {items.map(({ label, name, items: subItems, ...rest }) => {
                    return (
                        
                        <React.Fragment key={name}>
                            
                            <ListItem style={{  backgroundColor:"grey", width:"min-content", height: "min-content", margin: 5, }} button {...rest}>
                                <ListItemText>{label}</ListItemText>
                            </ListItem>
                            {Array.isArray(subItems) ? (
                                <List disablePadding dense>
                                    {subItems.map((subItem) => {
                                        return (
                                            <ListItem
                                                key={subItem.name}
                                                style={{ backgroundColor: "grey", width: "min-content", height: "min-content", margin:5 }}
                                                button
                                                dense
                                            >
                                                <ListItemText>
                                                    <span className="sidebar-subitem-text">
                                                        {subItem.label}
                                                    </span>
                                                </ListItemText>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            ) : null}
                        </React.Fragment>
                    )
                })}
            </List>
        </div>
    )
}

export default NavBar