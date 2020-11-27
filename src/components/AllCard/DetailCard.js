import React, {Component} from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import moment from 'moment';
import './DetailCard.css';
import  {
    Link
} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

class DetailCard extends Component {

    state = {
        post : {
            title : '',
            time : '',
            auth : '',
            image : '',
            body : ''
        }
    }

    componentDidMount(){
        let slug = this.props.match.params.slug;
        fetch(`https://cokro.com/cokro-api/story?slug=${slug}`)
        .then(response => response.json())
        .then(json => {
            console.log('result',json.data)
            let post = json.data;
            this.setState({
                post : {
                    title: post.judul_post,
                    time : post.tanggal_post,
                    auth : post.nama_author,
                    image : post.foto,
                    body : post.bodytext
                }
            })
        })
    }

    render(){
        return (
            <div>
                <Navbar/>
                <Banner/>
                <div className="container">
                    <div className="detailpost">
                        <h1 className="titlelist">{this.state.post.title}</h1>
                        <p className="publish">Published :&nbsp;{moment(this.state.time).format('MMMM DD YYYY, h:mm:ss')} </p>
                        <div className="img-list">
                            <img src={this.state.post.image} alt=""/>
                        </div>
                        <div>
                            { ReactHtmlParser(this.state.post.body) }
                        </div>
                        <p className="author">Author by :&nbsp;{this.state.post.auth}</p>
                        <Link to="/" className="linkberita">Baca Berita Lainnya &gt;</Link>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default DetailCard
