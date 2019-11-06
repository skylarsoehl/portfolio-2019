import React from 'react'
import * as theEnd from '../images/the-end.svg'

const Layout = (props) => {
    return (
        <div>
            <h1>Skylar Soehl</h1>
            {props.children}
            <img src={theEnd} alt='This is the end of the page.'></img>
        </div>
    )
}
export default Layout