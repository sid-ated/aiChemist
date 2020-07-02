import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import Search from './SearchComponent';
import { FaHospitalAlt, FaClinicMedical, FaBookReader, FaPrescription } from 'react-icons/fa';
import {MdMoreVert} from 'react-icons/md';
import {TiShoppingCart } from 'react-icons/ti';
import {IoMdChatbubbles} from 'react-icons/io';
import {GiArtificialIntelligence, GiHeartBeats} from 'react-icons/gi';




import {Navbar,NavbarBrand,Nav, NavbarToggler,Collapse,NavItem, Jumbotron,Button,Modal,ModalBody,
    ModalHeader,Form, FormGroup, Label, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu,
    DropdownItem,} from 'reactstrap';

import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor (props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen:false,
            dropdownOpen:false,
            dropdownOpen2:false
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handlelogin=this.handlelogin.bind(this);
        this.handleLogout=this.handleLogout.bind(this);
        this.handleRegister=this.handleRegister.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.onMouseEnter2 = this.onMouseEnter2.bind(this);
        this.onMouseLeave2 = this.onMouseLeave2.bind(this);
        this.toggleDropDown2 = this.toggleDropDown2.bind(this);
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

    toggleDropDown2() {
        this.setState(prevState => ({
          dropdownOpen2: !this.state.dropdownOpen2
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

    onMouseEnter2() {
        this.setState({ dropdownOpen2: true });
    }
    
    onMouseLeave2() {
        this.setState({ dropdownOpen2: false });
    }


    render() {
        return (
            <>
                <Navbar dark fixed="top" expand="md" className="mynav">
                    <div className="container-fluid">
                        
                        <NavbarToggler onClick={this.toggleNav}/>

                        <NavbarBrand  href='/'>
                            <GiHeartBeats size="35" color='#12A28C'/>
                        </NavbarBrand>
                    
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            
                            <Nav navbar>
                                <NavItem className="m-auto">
                                    <NavLink className="nav-link" to="/home" style={{ color: '#12A28C', fontSize: 14}}>
                                        <FaClinicMedical size="19"/> Home
                                    </NavLink>
                                </NavItem>

                                <NavItem className="m-auto">
                                    <NavLink className="nav-link" to="/" style={{ color: '#12A28C', fontSize: 14}}>
                                        <span><FaHospitalAlt size="19"/> Medical Store</span> 
                                    </NavLink>
                                </NavItem>

                                <NavItem className="m-auto">
                                    <NavLink className="nav-link" to="/" style={{ color: '#12A28C', fontSize: 14}}>
                                        <IoMdChatbubbles size="19"/> Chat With Expert
                                    </NavLink>
                                </NavItem>

                                <NavItem className="m-auto">
                                    <UncontrolledDropdown nav inNavbar 
                                        onMouseOver={this.onMouseEnter2}
                                        onMouseLeave={this.onMouseLeave2}
                                        isOpen={this.state.dropdownOpen2}
                                        toggle={this.toggleDropDown2}
                                    >
                                        <DropdownToggle nav style={{ color: '#12A28C', fontSize: 14 }}>
                                            <GiArtificialIntelligence size="19"/>AI-chemist
                                        </DropdownToggle>
                                        <DropdownMenu centre>
                                            <DropdownItem >
                                                <Link to="/aisuggest" style={{ color: '#12A28C', fontSize: 14, textDecoration: 'none'  }}>Use AI-chemist</Link>
                                            </DropdownItem>
                                            <DropdownItem >
                                                <Link to="/aifeedback" style={{ color: '#12A28C', fontSize: 14, textDecoration: 'none' }}> Rate AI-chemist</Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavItem>

                                <NavItem className="m-auto">
                                    <NavLink className="nav-link" to="/" style={{ color: '#12A28C', fontSize: 14}}>
                                        <span><FaBookReader size="19" /> Articles</span>
                                    </NavLink>
                                </NavItem>
                                
                                <NavItem className="m-auto">
                                    <UncontrolledDropdown nav inNavbar 
                                        onMouseOver={this.onMouseEnter}
                                        onMouseLeave={this.onMouseLeave}
                                        isOpen={this.state.dropdownOpen}
                                        toggle={this.toggleDropDown }
                                    >
                                        <DropdownToggle nav style={{ color: '#12A28C', fontSize: 14 }}>
                                            <MdMoreVert size="19"/> More
                                        </DropdownToggle>
                                        <DropdownMenu centre>
                                            <DropdownItem >
                                                <Link to="/contactus" style={{ color: '#12A28C', fontSize: 14, textDecoration: 'none'  }}>Contact Us</Link>
                                            </DropdownItem>
                                            <DropdownItem >
                                                <Link to="/aboutus" style={{ color: '#12A28C', fontSize: 14, textDecoration: 'none' }}>About Us</Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavItem>
                            </Nav>
                            
                            
                            <Nav  navbar className="ml-auto">
                                <NavItem className="m-auto">
                                    <Search
                                    medicine = {this.props.medicine}
                                    />
                                </NavItem>

                                
                                <NavItem className="mr-2 mt-1">
                                    <NavLink className="nav-link" to="/"  style={{ color: '#12A28C', fontSize: 14}}>
                                        <TiShoppingCart size="28" color='#12A28C'/> Cart
                                    </NavLink>
                                </NavItem>
                                

                                <NavItem className="m-auto" >

                                    { !this.props.auth.isAuthenticated ?
                                    <div>
                                        <div className="navbar-text mr-3" style={{ color: '#12A28C', fontSize: 14}}>Welcome, Guest!</div>
                                        <Button outline onClick={this.toggleModal} size="sm" style={{ backgroundColor: '#12A28C', color: 'white'}}>
                                            <span className="fa fa-sign-in fa-lg" style={{ color: 'white' }}></span> Login
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                    </div>
                                    :
                                    <div>
                                        <div className="navbar-text mr-3" style={{ color: '#12A28C', fontSize: 14 }}>Welcome, {this.props.auth.user.username}!</div>
                                        <Button outline onClick={this.handleLogout} size="sm" style={{ backgroundColor: '#12A28C ', color: 'white' }}>
                                            <span className="fa fa-sign-out fa-lg" style={{ color: 'white' }}></span> Logout
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
                                <Link to="/registration" style = {{fontSize: 15}} onClick={this.toggleModal}>New User? Register here!</Link>
                            </FormGroup>

                        </Form>

                    </ModalBody>
                </Modal>
                <div className="prescription">
                    <p><FaPrescription/> Upload a prescription</p>
                </div>
            </>
        );

    }
}
export default Header ;
