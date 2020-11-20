import React, { Component } from 'react';
import { Form, FormControl, FormGroup} from "react-bootstrap";

class SymptomText extends Component {

 state = {
    results: [],
    searchText: ''
 }

 componentWillMount () {
   document.addEventListener('mousedown', this.handleClick, false);
 }

 componentWillUnmount () {
  document.removeEventListener('mousedown', this.handleClick, false);
 }

 handleClick = (e) => {
   if(!this.node.contains(e.target)) {
      this.setState({
        results: []
      })
   }
 }


 getInfo = () => {
    this.setState({
      results: this.props.symptoms.filter(
        (m) => {
          return m.indexOf(this.state.searchText)!==-1;
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
    alert("I am working");
  }

  suggestionsSelected (value) {
    this.setState({
      searchText: value,
      results: []
    });
    
  }
  

 render() {

  const Suggestions = (props) => {
    let options;
      options = props.results.map(r => (
        <li key={r} onClick={() => this.suggestionsSelected(r)}>
          {r}
        </li>
    ))
    return <ul className="tempsuggest list-unstyled" >{options}</ul>
  }

   return (
     <div className="Search" ref={node=> this.node = node}>
        <Form inline onSubmit={this.handlebmit}>
          <FormGroup>
          <FormControl
            onChange={this.handleInputChange}
            onClick={this.handleInputChange}
            value={this.state.searchText}
            type="text"
            placeholder= {this.props.id}
            className="m-auto"
            size="sm"
          />
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

export default SymptomText;
