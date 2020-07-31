import React from 'react';
import { useForm, Controller } from "react-hook-form";
import Input from './helpers/Input/input';
import { yupResolver } from '@hookform/resolvers';
import errorMessageSchema from './validation/validator';
import './Form.scss';

export default function Form() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(errorMessageSchema)
    });
    const onSubmit = data => console.log(data);
    
    console.log('ERROR', errors)

    return (
      <form className="demo-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="demo-form-row">
            <Input 
                className="demo-form-input"
                required
                label="Name"
                name="name"
                type="text"
                register={register}
                errorMessage={errors.mainSection?.name?.message}
            />
            <Input 
                className="demo-form-input"
                required
                label="Email"
                name="email"
                type="email"
                register={register}
                errorMessage={errors.mainSection?.email?.message}
            />
        </div>
        <div className="demo-form-btn-container">
            <input className="demo-form-btn" type="submit" />
        </div>
      </form>
    );
}