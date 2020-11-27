import React from 'react'
import './Pagination.css'

const Pagination = (props) => {
    return (
        <button
        onClick={props.onClick}
        value={props.name}>
            {props.name}
        </button>
    )
}

export default Pagination