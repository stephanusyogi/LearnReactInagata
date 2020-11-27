import React from 'react';
import '../AllCard/AllCard.css';
// import moment from 'moment';


const Card = (props) => {
    return (
            <div className="col-4">
                <div className="card">
                    <div className="img-thumb">
                        <img src={props.image} alt=""/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="linkselengkapnya card-text" onClick={() => props.goDetail(props.slug)}>Baca Selengkapnya...</p>
                        <hr></hr>
                        <p className="date">Publish  : {props.time}
                        </p>
                        <p className="auth">Author : {props.auth}</p>
                    </div>
                </div>
            </div>
                
    )
} 

export default Card;