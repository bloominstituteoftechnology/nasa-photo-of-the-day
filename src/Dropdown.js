import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import  setDate from "./components/NASAContent"


export default function DropDownNASA (props) {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select date
      </DropdownToggle>
      <DropdownMenu>
        {/* <DropdownItem header>Header</DropdownItem> */}
        {/* <DropdownItem disabled>Action</DropdownItem> */}
        <DropdownItem onClick={() => setDate("2019-12-08")}>DECEMBER 8, 2019</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => setDate("2019-12-09")}>DECEMBER 9, 2019</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => setDate("2019-12-10")}>DECEMBER 10, 2019</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}