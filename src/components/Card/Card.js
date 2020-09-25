import React from 'react';

const Card = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src={props.image} alt=""/>
            </div>
            <div className="content">
                <p className="title">{props.title}</p>
                <p className="desc">Date  :{props.desc}</p>
                <p className="auth">Author:{props.auth}</p>
            </div>
        </div>
    )
} 

export default Card;