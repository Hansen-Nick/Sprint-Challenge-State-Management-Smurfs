import React from 'react';
import useForm from 'react-hook-form';
import {useContext} from 'react';
import {SmurfContext} from '../contexts/smurfContext'
import axios from 'axios'

const SmurfForm = () => {

  const {addSmurf} = useContext(SmurfContext);
  const {register, handleSubmit} = useForm();
  const onSubmit = values => {
    console.log(values);
    addSmurf({'name': values.smurfName,
              'age': values.smurfAge,
              'height': values.smurfHeight,
              });
    axios.post('http://localhost:3333/smurfs', {'name': values.smurfName,
    age: values.smurfAge,
    height: values.smurfHeight,
    id: Date.now()})
    .then(res=> console.log(res))
    .catch(err => console.log(err));
  }

  return (
  <div className='form'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Smurf Name</label>
      <input ref={register} name='smurfName'/>

      <label>Smurf Age</label>
      <input ref={register} name='smurfAge' />

      <label>Smurf Height</label>
      <input ref={register} name='smurfHeight' />

      <button type='submit'>Submit!</button>
    </form>
  </div>
  )}

  export default SmurfForm