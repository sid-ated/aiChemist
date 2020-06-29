import React, { Component } from 'react';

class Search extends Component {
 state = {
    query: '',
    results: []
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

  

 render() {

  const Suggestions = (props) => {
    const options = props.results.map(r => (
      <li key={r.id}>
        {r.name}
      </li>
    ))
    return <ul style={{"list-style-type": "none"}}>{options}</ul>
  }

   return (
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <Suggestions results={this.state.results} />
     </form>
   )
 }
}

export default Search;