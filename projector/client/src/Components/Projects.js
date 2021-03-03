import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ProjectList from './ProjectList';
import AddProject from './AddProject';

export default function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    getData()
  })

  const getData = () => {
    axios.get('/api/projects')
      .then(response => {
        console.log(response)
        setProjects(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <AddProject getData={getData} />
      <ProjectList projects={projects} />
    </div>
  )
}
