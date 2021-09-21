import React from "react";

import { Pagination } from "react-bootstrap";
import _ from 'lodash';
const PaginationComponent = (props) => {



    const { currentPage, pageCount,onPageChange } = props;

    console.log(currentPage);
    

    const pages = _.range(1, pageCount + 1);

  return (
    <section>
      <Pagination >

         <Pagination.First onClick={() => onPageChange(1)}/>
   <Pagination.Prev onClick={() => onPageChange( currentPage)} /> 
 

        {
          

                  pages.map(page => {

                      if (currentPage + 1 === page) {
                          return (
                              <Pagination.Item key={page} active activeLabel="" onClick={() => onPageChange(page)}>{page}</Pagination.Item>
                          );
                  
                      } else {
                       return (
                              <Pagination.Item key={page}  onClick={() => onPageChange(page)}>{page}</Pagination.Item>
                          );   
                }

                      
                      
           
                      
                  }  )
        }
        
  
  <Pagination.Next onClick={() => onPageChange(currentPage+2)}/> 
  <Pagination.Last onClick={() => onPageChange(pages.length)}/>

      </Pagination>
    </section>
  );
};

export default PaginationComponent;
