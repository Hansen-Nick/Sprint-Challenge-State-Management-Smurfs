import React, {useState, useEffect} from "react";
import "./App.css";
import {SmurfContext} from '../contexts/smurfContext';
import axios from 'axios'
import AddSmurfForm from './AddSmurfForm';
import DeleteSmurfForm from './DeleteSmurfForm'

const App = () => {

  const [smurfs, setSmurfs] = useState([])

  useEffect( () => {
    axios.get('http://localhost:3333/smurfs')
      .then( res => setSmurfs(res.data))
      .catch( err => console.log(err))
  }, [])

  const addSmurf = (smurf) => {
    setSmurfs([...smurfs, smurf])
  }

  console.log(smurfs)

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfContext.Provider value={{addSmurf}}>
        <AddSmurfForm />
        <DeleteSmurfForm />
      </SmurfContext.Provider>
    </div>
    );
  }

export default App;
