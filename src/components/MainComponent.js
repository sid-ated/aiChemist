import React, {Component} from 'react';
import Home from './HomeComponent';
//import Payment from './PaymentComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMedicine, fetchComments } from '../redux/ActionCreator';
//import { actions } from 'react-redux-form';

const mapStateToProps = state =>{
    return {
      medicines: state.medicines,
      comments: state.comments,
    }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => { dispatch(fetchMedicine())},
  fetchComments: () => dispatch(fetchComments()),
});


class Main extends Component {


  componentDidMount() {
    this.props.fetchDishes();
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

    return (
      <div>
        <Header/>
            <Switch>
              <Route path="/home" component={HomePage}/>
              <Redirect to="/home" />
            </Switch>
        <Footer/> 
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));