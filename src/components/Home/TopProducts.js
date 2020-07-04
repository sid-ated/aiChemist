import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from '../UtilComp/LoadingComponent';
import { baseUrl } from '../../shared/baseUrl';

function TopProducts (props){

    let columns=[];
    props.medicine.forEach((item,idx) => {

        columns.push(
            <div className="col-md-3 py-3" key={idx}>
                <Card className="mycard">
                <CardImg src={baseUrl + item.image}  alt={item.name} />
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                </CardBody>
                </Card>
            </div>
        )

        if ((idx+1)%4===0) {columns.push(<div className="w-100"></div>)}
    })


    if (props.isLoading){
        return(
            <Loading/>
        )
    }

    else if (props.errMess){
        return(
            <h4>{props.errMess}</h4>
        );
    }

    else{
        return(
            <div className="row">
                {columns}
            </div>
        );
    }
}

export default TopProducts;