import React from 'react';
import './Home.css';
import MainCarousel from './MainCarouselComponent';
import TopProducts from './TopProducts';


function Home (props){
    return(
        <div>
            
            <MainCarousel 
                medicine={props.medicine}
                isLoading={props.medicinesLoading}
                errMess={props.medicinesErrMess}
            />
            
            <TopProducts
                medicine={props.medicine}
                isLoading={props.medicinesLoading}
                errMess={props.medicinesErrMess}
            />
             
        </div>
    );
}

export default Home;