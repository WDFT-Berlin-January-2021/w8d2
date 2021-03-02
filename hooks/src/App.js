import { useState, useEffect } from 'react';
import './App.css';
import UserContext from './UserContext';
import Second from './components/Second';

// custom hook - it's just a function
const useLocalStorage = (key, defaultValue = '') => {
  const [state, setState] = useState(() => window.localStorage.getItem(key) || defaultValue);
  useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state])
  return [state, setState]
}

function App() {

  // const stateArray = useState(0);
  // stateArray[0] -> getter
  // stateArray[1] -> setter

  const [count, setCount] = useState(0);

  const handleChange = e => setBanana(e.target.value)

  const [banana, setBanana] = useLocalStorage('banana')

  // const [name, setName] = useState(() => window.localStorage.getItem('name') || '');
  // useEffect(() => {
  //   console.log('use effect')
  //   window.localStorage.setItem('name', name)
  // }, [name, count])

  // const [contacts, setContacts] = useState([]);
  // with [] as a second parameter -> componendDidMount()
  // useEffect(() => {
  //   console.log('use effect')
  //   fetch('/api/contacts')
  //     .then(response => response.json())
  //     .then(data => setContacts(data))
  //     .catch(err => console.log(err))
  // }, [])
  const user = { name: 'Hans' }
  return (
    <div className="App">
      <header className="App-header">

        {banana ? <strong>Hello {banana}</strong> : 'Please type your name'}
        <input type="text" onChange={handleChange} value={banana} />
        <h5>{count}</h5>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
        {/* {contacts.map(contact => (
          <h5>{contact.name}</h5>
        ))} */}
      </header>
      <UserContext.Provider value={count}>
        <Second />
      </UserContext.Provider>
    </div>
  );
}

export default App;
