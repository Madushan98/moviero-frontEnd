import React from 'react'

import './titleBar.scss'


  const TitleBar = ({title}) => {


    return (
        <div>
            <div className="feature-title">{ title}</div>
             <hr></hr>
        </div>
    )
}

export default TitleBar;