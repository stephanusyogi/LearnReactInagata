import React,{ Component, Fragment } from 'react';
import './AllCard.css';
import Card from '../Card/Card';


class AllCard extends Component {
    state = {
        post : []
    }


    componentDidMount(){
        fetch('http://cokro.com/cokro-api/story?limit=10&page=1')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({
                post: json.data
            })
        })
    }
    render(){
        return(
            <Fragment>
                <h1 className="section-title">Blog Post Cokro</h1>
                {
                    this.state.post.map(post => {
                        return <Card key={post.id_blog} title={post.judul_post} desc={post.tanggal_post} image={post.foto} auth={post.nama_author}/>
                    })
                }
            </Fragment>
        )
    }
}

export default AllCard;