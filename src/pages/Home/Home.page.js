import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Carousel from '../../components/Carousel/Carousel';


const App = () => {
    return  (
        <div>
            <Navbar/>
            <Carousel/>
            <Jumbotron/>
        </div>
    );
};

export default App