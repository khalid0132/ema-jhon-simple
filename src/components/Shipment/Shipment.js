// module-43-9
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      <form className = "ship-form" onSubmit={handleSubmit(onSubmit)}>
        <input name="example" defaultValue = {loggedInUser.name} ref={register} />
        <input name="exampleRequired" defaultValue = {loggedInUser.email} ref={register({ required: true })} />
        {errors.exampleRequired && <span style={{color:'red'}}>This field is required</span>}
        
        <input type="submit" />
      </form>
    );
};

export default Shipment;