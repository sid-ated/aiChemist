import React, { Component } from 'react';
import { Form, FormControl, Button ,FormGroup} from "react-bootstrap";
import { FaSearch} from 'react-icons/fa';

class Search extends Component {

 state = {
    results: [],
    searchText: ''
 }

 
 getInfo = () => {
    this.setState({
      results: this.props.medicine.filter(
        (m) => {
          return m.name.indexOf(this.state.searchText)!==-1;
        }
      )
    })
  }

 handleInputChange = (e) => {
   const value = e.target.value;
    this.setState({
      searchText: value
    }, () => {
      if (this.state.searchText.length === 0) {
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
    alert("I am");
  }

  handleOnBlur =(event)=> {
    const value=event.target.value;
    this.setState({
      searchText: value,
      results: []
    });
  }

  suggestionsSelected (value) {
    this.setState({
      searchText: value,
      
    });
    
  }
  

 render() {

  const Suggestions = (props) => {
    let options;
      options = props.results.map(r => (
        <li key={r.id} onMouseOver={() => this.suggestionsSelected(r.name)}>
          {r.name}
        </li>
    ))
    return <ul className="tempsuggest list-unstyled" >{options}</ul>
  }

   return (
     
     <div className="Search">
        <Form inline onSubmit={this.handleFormSubmit}>
          <FormGroup>
          <FormControl
            onBlur={this.handleOnBlur}
            onChange={this.handleInputChange}
            value={this.state.searchText}
            type="text"
            placeholder="Search Medicines..."
            className="m-auto"
            size="sm"
          />
          <Button onClick={this.handleSearchSubmit} size="sm" style={{ backgroundColor: '#12A28C'}}>
              <FaSearch/>
          </Button> 
          </FormGroup> 
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