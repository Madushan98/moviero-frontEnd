import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';


const DropDownComponent = () => {



    return (
        <div>
            <DropdownButton size="small" id="dropdown-basic-button" title="Choose">
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
        </div>
    )






   
}


export default DropDownComponent;