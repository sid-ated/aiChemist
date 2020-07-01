import React, { Component } from 'react';
import { Form, FormControl, Button } from "react-bootstrap";
import { FaSearch} from 'react-icons/fa';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem,} from 'reactstrap';

class Search extends Component {

 state = {
    query: '',
    results: [],
    dropdownOpen: false
 }

 componentDidMount() {
  document.body.addEventListener('click', ()=> {
      this.setState({
        results: []
      })
  });
}

 getInfo = () => {
    this.setState({
      results: this.props.medicine.filter(
        (m) => {
          return m.name.indexOf(this.state.query)!==-1;
        }
      )
    })
  }

 handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query.length === 0) {
        this.setState({
          results: []
        })
      }
      else {
        this.getInfo()
      }
    })
  }

  handleSearchSubmit = () => {
    console.log("I am working bro");
  }


  handleOnBlur =() => {
    this.setState({
      results: []
    })
  }

 render() {

  const Suggestions = (props) => {
    let options;
    // if(this.state.results.length===0){
    //   options = <li style={{fontSize: 14, color: '#12A28C'}}> No matches found...</li>
    // }
    // else{
        options = props.results.map(r => (
          <li key={r.id} style={{fontSize: 14, color: '#12A28C'}}>
            <span onClick={this.handleClickItem}>{r.name}</span>
          </li>
      ))
    //}
    return <ul className="tempsuggest list-unstyled" onBlur={this.handleOnBlur}>{options}</ul>
  }

   return (
     
     <div>
        <Form inline onSubmit={this.handleFormSubmit}>
          <FormControl
            onChange={this.handleInputChange}
            value={this.state.searchText}
            type="text"
            placeholder="Search Medicines..."
            className="m-auto"
            size="sm"
            ref={input => this.search = input}
          />
          <Button onClick={this.handleSearchSubmit} size="sm" style={{ backgroundColor: '#12A28C'}}>
              <FaSearch/>
          </Button>  
        </Form>
        {this.state.results.length!==0 ?
              <Suggestions results={this.state.results} />
              :
              <div></div>
        }
      </div>
   )
 }
}

export default Search;