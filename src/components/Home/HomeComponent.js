import React from 'react';
import './Home.css';
import MainCarousel from './MainCarouselComponent';
import TopProducts from './TopProducts';
import {Button} from 'reactstrap';


function Home (props){
    return(
        <div>
            
            <MainCarousel 
                medicine={props.medicine}
                isLoading={props.medicinesLoading}
                errMess={props.medicinesErrMess}
            />
            
            <div className="container mt-3 mb-3">
                <div className="row">
                    <h4>Popular Products</h4> 
                    <Button className="m-auto bg-primary" size="sm">View All</Button>
                </div>
                <TopProducts
                    medicine={props.medicine}
                    isLoading={props.medicinesLoading}
                    errMess={props.medicinesErrMess}
                />
            </div>

            <div className="container mt-3 mb-3">
                <div className="row">
                    <h4>Top Genereic Products</h4> 
                    <Button className="m-auto bg-primary" size="sm" >View All</Button>
                </div>
                <TopProducts
                    medicine={props.medicine}
                    isLoading={props.medicinesLoading}
                    errMess={props.medicinesErrMess}
                />
            </div>

            <div className="container mt-3 mb-3">
                <div className="row">
                    <h4>Top Articles</h4> 
                    <Button className="m-auto bg-primary" size="sm" >View All</Button>
                </div>
                <TopProducts
                    medicine={props.medicine}
                    isLoading={props.medicinesLoading}
                    errMess={props.medicinesErrMess}
                />
            </div>
            
             
        </div>
    );
}

export default Home;