import React , {Component} from 'react';
import {Link} from 'react-router-dom';

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
        this.handleLogout=this.handleLogout.bind(this);
        this.handleRegister=this.handleRegister.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
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

    toggleDropDown() {
        this.setState(prevState => ({
          dropdownOpen: !this.state.dropdownOpen
        }));
    }

    handlelogin(event){
        this.toggleModal();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();
    }

    handleRegister(event){
        this.props.registerUser({username: this.username.value, password: this.password.value});
        event.preventDefault();
    }

    handleLogout() {
        this.props.logoutUser();
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
                                 <NavLink className="nav-link" to="/" style={{ color: '#2DC8C8 ' }}>
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
                                toggle={this.toggleDropDown }
                             >
                                    <DropdownToggle nav style={{ color: '#2DC8C8 ' }}>
                                        Personal Care
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                        Buy Eyewears
                                        </DropdownItem>
                                        <DropdownItem >
                                          <Link to="/payment">Payment</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                        Fuck me this is shit
                                        </DropdownItem>
                                    </DropdownMenu>
                              </UncontrolledDropdown>
                         </Nav>
                         <Nav className="ml-auto" navbar>
                                <NavItem>
                                    { !this.props.auth.isAuthenticated ?
                                        <Button outline onClick={this.toggleModal}>
                                            <span className="fa fa-sign-in fa-lg"></span> Login
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        :
                                        <div>
                                            <div className="navbar-text mr-3" style={{ color: 'black' }}>Welcome! {this.props.auth.user.username}</div>
                                            <Button outline onClick={this.handleLogout}>
                                                <span className="fa fa-sign-out fa-lg"></span> Logout
                                                {this.props.auth.isFetching ?
                                                    <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                    : null
                                                }
                                            </Button>
                                        </div>
                                    }

                                </NavItem>
                            </Nav>
                         </Collapse>
                         
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
                            <FormGroup check >
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input)=>this.remember=input}/>
                                    Remember me
                                </Label>
                            </FormGroup>

                            <FormGroup>
                                <Button type="submit" value="submit" className="bg-primary" mt-2>Login</Button>
                            </FormGroup>
                            
                            <FormGroup>
                                <p style = {{fontSize: 15}}>Sign in with Google</p> 
                            </FormGroup>

                            <FormGroup>
                                <p style = {{fontSize: 15}}>Sign in with Facebook</p> 
                            </FormGroup>

                            <FormGroup>
                                <Link to="/registration" style = {{fontSize: 15}}>New User? Register here!</Link>
                            </FormGroup>

                        </Form>

                    </ModalBody>
                </Modal>

            </>
        );

    }
}
export default Header ;
