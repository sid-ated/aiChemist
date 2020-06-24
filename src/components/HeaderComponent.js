import React , {Component} from 'react';

import {Navbar,NavbarBrand,Nav, NavbarToggler,Collapse,NavItem, Jumbotron,Button,Modal,ModalBody,
    ModalHeader,Form, FormGroup, Label, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu,
    DropdownItem,} from 'reactstrap';

import {NavLink} from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

class Header extends Component {
    constructor (props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen:false,
            dropdownOpen:false
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handlelogin=this.handlelogin.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen :!this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen :!this.state.isModalOpen
        });

    }

    toggle1() {
        this.setState(prevState => ({
          dropdownOpen: !this.state.dropdownOpen
        }));
    }

    handlelogin(event){
        this.toggleModal();
        alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked);
        event.preventDefault();

    }

    onMouseEnter() {
        this.setState({ dropdownOpen: true });
    }
    
    onMouseLeave() {
        this.setState({ dropdownOpen: false });
    }

    render() {
        return (
            <>
                <Navbar dark fixed="top" expand="md">
                   <div className="container">
                       <NavbarToggler onClick={this.toggleNav}/>
                         <NavbarBrand className="mr-auto" href='/' style={{ color: '#EC1282 ' }}>
                             <img src= {baseUrl + "images/logo.png"} height="30" width="30" alt="aichemist"/>
                         </NavbarBrand>
                         <Collapse isOpen={this.state.isNavOpen} navbar>
                         <Nav navbar>
                             <NavItem>
                                 <NavLink className="nav-link" to="/home" style={{ color: '#2DC8C8'}}>
                                     <span className="fa fa-home fa-lg"></span> Home
                                 </NavLink>
                             </NavItem>

                             <NavItem>
                                 <NavLink className="nav-link" to="/menu" style={{ color: '#2DC8C8 ' }}>
                                     <span className="fa fa-list fa-lg"></span> Medical Store
                                 </NavLink>
                             </NavItem>

                             <NavItem>
                                 <NavLink className="nav-link" to="/" style={{ color: '#2DC8C8' }}>
                                     <span className="fa fa-comments-o fa-lg"></span> Feedback
                                 </NavLink>
                             </NavItem>

                             <UncontrolledDropdown nav inNavbar 
                                onMouseOver={this.onMouseEnter}
                                onMouseLeave={this.onMouseLeave}
                                isOpen={this.state.dropdownOpen}
                                toggle={this.toggle1}
                             >
                                    <DropdownToggle nav style={{ color: '#2DC8C8 ' }}>
                                        Personal Care
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                        Buy Eyewears
                                        </DropdownItem>
                                        <DropdownItem>
                                        
                                        </DropdownItem>
                                        <DropdownItem>
                                        Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                              </UncontrolledDropdown>
                         </Nav>

                         </Collapse>
                         <nav className="ml-auto" navbar>
                            
                            <Button outline onClick={this.toggleModal} style={{backgroundColor: '#2DC8C8 ', color: 'white'}}>
                                <span className="fa fa-sign-in fa-lg"></span> Login
                            </Button>
                        
                         </nav>
                         
                   </div>
                </Navbar>
                <Jumbotron >
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>aichemist</h1>
                                <p>Not just better healthcare, but a better healthcare experience.</p>

                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} >Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handlelogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                     innerRef={(input)=>this.username=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                innerRef={(input)=>this.password=input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input)=>this.remember=input}/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-primary">Login</Button>
                        </Form>

                    </ModalBody>
                </Modal>

            </>
        );

    }
}
export default Header ;
