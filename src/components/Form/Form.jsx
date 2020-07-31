import React from 'react';
import { useForm } from "react-hook-form";
import Input from './helpers/Input/input';
import * as errorMessageSchema from './validation/validator';
import './Form.scss';

export default function Form() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: errorMessageSchema
    });
    const onSubmit = data => console.log(data);
  
    return (
      <form className="demo-form" onSubmit={handleSubmit(onSubmit)}>
        <Input 
            className="demo-form-input"
            required
            label="Name"
            ref={register}
            errorMessage={errors.errorMessage.name}
        />
        <button className="demo-form-btn" type="submit">Submit</button>
      </form>
    );
}