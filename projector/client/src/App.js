import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Projects from './Components/Projects';
import ProjectDetails from './Components/ProjectDetails';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';

class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} setUser={this.setUser} />
        <Route
          exact path='/projects'
          // component={Projects}
          render={props => {
            if (this.state.user) {
              return <Projects {...props} />
            } else return <Redirect to='/login' />
          }}
        />
        {/* <ProtectedRoute
          exact path='/projects'
          user={this.state.user}
          component={Projects}
          redirectPath='/login'
        /> */}
        <Route
          exact path='/projects/:id'
          component={ProjectDetails}
        />
        <Route
          exact path='/signup'
          // component={Signup}
          // if you want to pass props in the routing we use a so called render prop
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        />

      </div>
    );
  }
}

export default App;
