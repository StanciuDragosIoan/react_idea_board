
import React, { Component } from 'react';

class AddIdea extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleChange1(event) {
        this.setState({value: event.target.value});
      }
  
      
      handleChange2(event) {
        this.setState({value: event.target.value});
      }
    
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Body:
            <input type="text" value={this.state.value} onChange1={this.handleChange1} />
          </label>
          <label>
            Category:
            <input type="text" value={this.state.value} onChange2={this.handleChange2} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default AddIdea;