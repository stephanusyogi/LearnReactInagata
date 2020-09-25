import React from 'react';
import  {
    Link
} from 'react-router-dom';
import './Jumbotron.css';

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Cokro | Platform Berita Jaman Now</h1>
            <p className="lead">Dengan berita-berita ter uptodate dan masih hangat serta dengan kategori berota mulai dari lifestyle, politik, ekonomi, dan lain sebagainya.
            Cokro siap menemani hari anda :)</p>
            <hr className="my-4"/>
            <p>Klik tombol dibawah ini</p>
            <p className="lead">
                <Link to="/blog"  className="btn btn-primary btn-lg" role="button">Baca Berita Terkini</Link>
            </p>
        </div>
    )
}

export default Jumbotron

