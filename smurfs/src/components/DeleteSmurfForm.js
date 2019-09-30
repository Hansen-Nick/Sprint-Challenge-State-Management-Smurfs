import React from 'react';
import useForm from 'react-hook-form';
import axios from 'axios'

const DeleteSmurfForm = () => {

  const {register, handleSubmit} = useForm();
  const onSubmit = values => {
    console.log(values);
    axios.delete(`http://localhost:3333/smurfs/${values.smurfID}`).then(response => {
      console.log(response);})}

  return (
  <div className='form'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Smurf ID to Delete</label>
      <input ref={register} name='smurfID'/>

      <button type='submit'>Submit!</button>
    </form>
  </div>
  )}

  export default DeleteSmurfForm