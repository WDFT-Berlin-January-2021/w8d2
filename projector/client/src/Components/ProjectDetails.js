import React, { Component } from 'react'
import axios from 'axios';
import EditProject from './EditProject';

export default class ProjectDetails extends Component {

  state = {
    project: null,
    error: null,
    editForm: false,
    title: '',
    description: ''
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(`/api/projects/${this.props.match.params.id}`)
      .then(response => {
        console.log(response)
        this.setState({
          project: response.data,
          title: response.data.title,
          description: response.data.description
        })
      })
      .catch(err => {
        console.log(err.response)
        if (err.response.status === 404) {
          // we have a 404 error
          this.setState({
            error: 'Not found 🤷‍♀️🤷‍♂️'
          })
        }
      })

  }

  deleteProject = () => {
    const id = this.state.project._id
    axios.delete(`/api/projects/${id}`)
      .then(() => {
        // we want to redirect to the projects list
        this.props.history.push('/projects')
      })
      .catch(err => {
        console.log(err)
      })
  }

  toggleEditForm = () => {
    this.setState((prevState) => ({
      editForm: !prevState.editForm
    }))
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('update')
    console.log(this.state.title, this.state.description)
    axios.put(`/api/projects/${this.state.project._id}`, {
      title: this.state.title,
      description: this.state.description
    })
      .then(response => {
        this.setState({
          project: response.data,
          title: response.data.title,
          description: response.data.description,
          editForm: false
        })
        // this.getData(); / with some changes
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    if (this.state.error) return <h3>{this.state.error}</h3>
    if (!this.state.project) return (<></>)
    // if (!this.state.project) return <></>
    return (
      <div>
        <h1>{this.state.project.title}</h1>
        <p>{this.state.project.description}</p>
        <button onClick={this.deleteProject}>Delete this project ❌</button>
        <button onClick={this.toggleEditForm}>Show Edit Form 📊</button>
        {this.state.editForm && (
          <EditProject
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.state}
          />
        )}
      </div>
    )
  }
}
