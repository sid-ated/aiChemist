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
    if (this.state.dropdownOpen===true){
      this.setState({
        dropdownOpen: false
      })
    }
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
        if (this.state.dropdownOpen===true){
          this.setState({
            dropdownOpen: false
          })
        }
      }
      else {
        this.getInfo()
        if (this.state.dropdownOpen===true){
          this.setState({
            dropdownOpen: false
          })
        }
        else {
          this.setState({
            dropdownOpen: true
          })
        }
      }
    })
  }

  handleSearchSubmit = () => {
    console.log("I am working bro");
  }

  handleClickItem = () => {
    console.log("Click Item is working bro");
  }

  toggleDropDown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

 render() {

  const Suggestions = (props) => {
    let options;
    if(this.state.results.length===0){
      options = <DropdownItem style={{fontSize: 14, color: '#12A28C'}}> No matches found...</DropdownItem>
    }
    else{
        options = props.results.map(r => (
        <DropdownItem key={r.id} style={{fontSize: 14, color: '#12A28C'}}>
          <div onClick={this.handleClickItem}>{r.name}</div>
        </DropdownItem >
      ))
    }
    return <DropdownMenu centre>{options}</DropdownMenu>
  }

   return (
    <Form inline onSubmit={this.handleFormSubmit}>
      
      <Dropdown nav inNavbar 
        isOpen={this.state.dropdownOpen}
        toggle={this.toggleDropDown}
      >
        <DropdownToggle nav>
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
          </DropdownToggle>
                                   
        
        <Suggestions results={this.state.results} />
      </Dropdown>
    </Form>
   )
 }
}

export default Search;