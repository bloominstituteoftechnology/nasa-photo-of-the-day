import React, { useState } from 'react';
import './App.css';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DorpdownItem, DropdownItem} from 'reactstrap';

export function DropDown(){
    const [open, setOpen] = useState(false);
    const toggle = () => {setOpen(!open)
    };

    

    return(
        <div>
        <ButtonDropdown 
            
            className='button-wrapper'
            isOpen={open} 
            toggle={toggle}
        >
            <DropdownToggle  className="button">
                Check out other days!
            </DropdownToggle>
            <DropdownMenu>
    {/* <DropdownItem isOpen={toggle}>New Image Date</DropdownItem> */}
            </DropdownMenu>
        </ButtonDropdown>
        </div>
    )
}

export default DropDown;