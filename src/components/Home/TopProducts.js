import React, {useState} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, 
    Row, Col, CardLink, Button, CardGroup, CardDeck, Collapse} from 'reactstrap';
import { Loading } from '../UtilComp/LoadingComponent';
import { baseUrl } from '../../shared/baseUrl';
import {MdAddShoppingCart} from 'react-icons/md';

function TopProducts (props){

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    let columns=[];
    props.medicine.forEach((item,idx) => {

        columns.push(
            <Col md="3">
                <Card className="mycard">
                <CardImg src={baseUrl + item.image} width="50%" alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <Collapse isOpen={isOpen}>
                        <CardText>{item.description}</CardText>
                    </Collapse>
                    
                    <CardText>
                        <small> $ {item.price}</small>
                    </CardText>
                    <CardLink style={{fontSize: 15}} onClick={toggle}>See More...</CardLink>
                    <CardLink> <Button className="m-auto" href="#"><MdAddShoppingCart/></Button></CardLink>
                    <CardText>
                        <small className="text-muted" >Currently in stock.</small>
                    </CardText>
                    
                </CardBody>
                </Card>
            </Col>
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
            <Container className="mt-3">
                <CardDeck>
                    {columns}
                </CardDeck>
            </Container>
        );
    }
}

export default TopProducts;