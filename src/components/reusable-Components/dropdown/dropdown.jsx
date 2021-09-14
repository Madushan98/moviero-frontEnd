import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';


const DropDownComponent = (props) => {



    const { onFilter, categories, title } = props;

    console.log(categories);
    return (
        <div>
            <DropdownButton size="small" id="dropdown-basic-button" title={title}>
                {
                    categories.map((category,index) => {

                        return (
                            <Dropdown.Item key={index} onClick={()=> onFilter(category.categoryName)} >{ category.categoryName}</Dropdown.Item>

                      )

                    })
                
                
                }
   
    </DropdownButton>
        </div>
    )






   
}


export default DropDownComponent;