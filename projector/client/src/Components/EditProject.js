import React, { Component } from 'react'

export default class EditProject extends Component {
  render() {
    return (
      <div>
        <h2>Edit Project</h2>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.props.title}
            onChange={this.props.handleChange}
          />
          <label htmlFor="title">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={this.props.description}
            onChange={this.props.handleChange}
          />
          <button type='submit'>Update this project</button>
        </form>
      </div >
    )
  }
}
