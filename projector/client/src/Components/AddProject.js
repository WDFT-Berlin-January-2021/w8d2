import React, { Component } from 'react'
import axios from 'axios';

export default class AddProject extends Component {

  state = {
    title: '',
    description: '',
    error: null
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    if (value.length < 8) {
      this.setState({
        error: 'String is not long enough'
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    // const { title, description } = this.state;
    // console.log({ title, description });
    axios.post('/api/projects', {
      title: this.state.title,
      description: this.state.description
    })
      .then((response) => {
        console.log(response)
        this.setState({
          title: '',
          description: ''
        })
        // update the list of projects in Projects.js - we use the getData function 
        // in the props
        this.props.getData();
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button type="submit">Create this project</button>
      </form>
    )
  }
}
