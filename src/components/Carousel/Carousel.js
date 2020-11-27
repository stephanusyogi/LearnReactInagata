import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="https://placeimg.com/1000/200/tech" alt="First slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h3>Baca Berita Terbaru di Platform ini</h3>
                    <p>Lorem Ipsum dolor sit amet</p>
                </div>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://placeimg.com/1000/200/nature" alt="Second slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h3>Cokro Nominasi Platform News Terbaik 2020</h3>
                    <p>Lorem Ipsum dolor sit amet</p>
                </div>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://placeimg.com/1000/200/arch" alt="Third slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h3>Jadi Bagian Keluarga Besar Kami</h3>
                    <p>Lorem Ipsum dolor sit amet</p>
                </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel