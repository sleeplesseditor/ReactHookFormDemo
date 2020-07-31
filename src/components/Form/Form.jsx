import React from 'react';
import { useForm } from "react-hook-form";
import './Form.scss';

export default function Form() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    return (
      <form className="demo-form" onSubmit={handleSubmit(onSubmit)}>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" ref={register({ required: true, maxLength: 30 })} />
        {errors.name && errors.name.type === "required" && <span>This is required</span>}
        {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }
        <input type="submit" />
      </form>
    );
}