import React from 'react';
import { Link } from 'react-router-dom';
import '../Cta/Cta.css';

const Cta = () => {
    return (
        <div className="cta-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Jadilah Bagian Dari Kami | Mitra Cokro</h2>
                    </div>
                    <div className="col-md-4">
                        <input type="text" placeholder="Your Email Here"></input>
                        <div className="submit">
                            <Link to="/dummy">
                            <button>Submit</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta

