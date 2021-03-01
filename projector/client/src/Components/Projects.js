import React, { Component } from 'react'
import axios from 'axios';
import ProjectList from './ProjectList';
import AddProject from './AddProject';

export default class Projects extends Component {

  state = {
    projects: []
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get('/api/projects')
      .then(response => {
        console.log(response)
        this.setState({
          projects: response.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <AddProject getData={this.getData} />
        <ProjectList projects={this.state.projects} />
      </div>
    )
  }
}
