import React, {Component} from 'react';
import Home from './HomeComponent';
import Payment from './PaymentComponent';
import Registration from './RegistrationComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMedicine, fetchComments, loginUser, logoutUser, registerUser } from '../redux/ActionCreator';
//import { actions } from 'react-redux-form';

const mapStateToProps = state =>{
    return {
      medicines: state.medicines,
      comments: state.comments,
      auth: state.auth
    }
}

const mapDispatchToProps = dispatch => ({
  fetchMedicines: () => { dispatch(fetchMedicine())},
  fetchComments: () => dispatch(fetchComments()),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  registerUser: (creds) => dispatch(registerUser(creds))
}); 


class Main extends Component {


  componentDidMount() {
    this.props.fetchMedicines();
    this.props.fetchComments();
  }

  render(){
    const HomePage = () =>{
      return(
        <Home 
              medicine={this.props.medicines.medicines.filter((medicine) => medicine.featured)[0]}
              medicinesLoading={this.props.medicines.isLoading}
              medicineErrMess={this.props.medicines.errMess}
          />
      );
    }

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          : 
          <div>
            <h1>You are not authorized. </h1>
          </div>
      )} />
    );


    return (
      <div>
        <Header
          auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser} 
          registerUser={this.props.registerUser}
          medicine={this.props.medicines.medicines}
        />
            <Switch>
              <Route path="/home" component={HomePage}/>
              <Route exact path ="/registration" component = {() => <Registration 
                                                                registerUser={this.props.registerUser}
                                                                auth={this.props.auth} />} />
              <PrivateRoute exact path ="/payment" component={() => <Payment/>} />
              <Redirect to="/home" />
            </Switch>
        <Footer/> 
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));