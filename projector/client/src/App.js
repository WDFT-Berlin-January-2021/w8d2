import { Route } from 'react-router-dom';
import './App.css';
import Projects from './Components/Projects';
import ProjectDetails from './Components/ProjectDetails';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route
        exact path='/projects'
        component={Projects}
      />
      <Route
        exact path='/projects/:id'
        component={ProjectDetails}
      />
    </div>
  );
}

export default App;
