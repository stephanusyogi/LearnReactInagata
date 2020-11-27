import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import AllCard from '../../components/AllCard/AllCard';
import '../Home/Home.css';
import Cta from '../../components/Cta/Cta';

const App = () => {
    return  (
        <div>
            <Navbar/>
            <Carousel/>
            <Jumbotron/>
            <AllCard/>
            <Cta/>
            <Footer/>
        </div>
    );
};

export default App