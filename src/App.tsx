import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
type User = {
    id: number,
    name: string,
    username: string
    emai: string
}
const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        axios.get('/api/users').then(response => setUsers(response.data))
    }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="/api/users"
          target="_blank"
          rel="noopener noreferrer"
        >
          There are {users.length} users.
        </a>
      </header>
    </div>
  );
}

export default App;
