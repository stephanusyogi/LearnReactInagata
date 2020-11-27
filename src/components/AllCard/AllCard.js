import React,{ Component, Fragment} from 'react';
import './AllCard.css';
import Card from '../Card/Card';
import moment from 'moment';
import { withRouter } from 'react-router';
import Pagination from '../Pagination/Pagination';
// import axios from 'axios';
// import history from '../history';
// import { browserHistory } from 'history';
 


class AllCard extends Component {

    constructor(props){
        super(props);
        this.state={
            post : [],
            visiable: 3,
            page: 3,
            loading: false
        }
        this.handleload  = this.handleload.bind(this);
        this.getData = this.getData.bind(this);
        this.btnClick = this.btnClick.bind(this);
    }
    
    

    handleDetail = (slug) => {
        this.props.history.push(`/detailblog/${slug}`);
        console.log(slug);
    }

    handleload(){
        this.setState((old) => {
            return {visiable : old.visiable + 3}
        })
    }

    btnClick(e){
        const newpage = e.target.value

        this.setState({
            page : newpage
        }, () => {
            this.getData()
        })

        
    }

    getData(){
        const { page } = this.state
        this.setState({
            post:[],
            loading: true
        })
        fetch(`https://cokro.com/cokro-api/story?limit=4&page=${page}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.data)
            this.setState({
                post: json.data,
                loading: false
            },
            console.log('Page ke :', this.state.page))
        })
        .catch(e =>{
            console.error(e)
            this.setState({
                post:[],
                loading: false
            })
        })
    }

    componentDidMount(){
        this.getData();
    }
    render(){
        if(this.state.loading){
            return(
                <p>Loading.....</p>
            )
        }
        return(
            <Fragment>
                <div className="container container-margin">
                    <div className="row">
                    {
                        this.state.post.slice(0, this.state.visiable).map(post => {
                            return (
                                <Card  className="cardlist" 
                                goDetail={this.handleDetail}
                                key={post.id_blog} 
                                title={post.judul_post} 
                                time={moment(post.tanggal_post).format('MMMM DD YYYY, h:mm:ss')} 
                                image={post.foto} 
                                slug = {post.slug}
                                auth={post.nama_author}/>
                            )
                            
                        })
                    }
                    </div>
                    <div className="load">
                        {this.state.visiable < this.state.post.length && 
                        <button className="load" onClick={this.handleload}>Load More</button>
                        }
                    </div>
                    <div className="pagination">
                        <Pagination name="1" onClick={this.btnClick}/>
                        <Pagination name="2" onClick={this.btnClick}/>
                        <Pagination name="3" onClick={this.btnClick}/>
                        <Pagination name="4" onClick={this.btnClick}/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(AllCard);