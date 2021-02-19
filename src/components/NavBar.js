import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DatePicker from 'react-date-picker'

const NavBar = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [value, setValue] = useState(today)
    const toggle = () => setDropdownOpen(!dropdownOpen)

    const {setCurrentDate, url} = props

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = `${mm}${dd}${yyyy}`;



    return(
        <div>
            <input type='date' value = {value} ></input>
        </div>
    )
}

export default NavBar