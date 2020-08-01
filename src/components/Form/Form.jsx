import React from 'react';
import { useForm, Controller } from "react-hook-form";
import Input from './helpers/Input/input';
import DatePicker from './helpers/DatePicker/datepicker';
import { yupResolver } from '@hookform/resolvers';
import errorMessageSchema from './validation/validator';
import './Form.scss';

export default function Form() {
    const { register, handleSubmit, control, errors } = useForm({
        resolver: yupResolver(errorMessageSchema)
    });
    const onSubmit = data => console.log(data);
    
    console.log('ERROR', errors)

    return (
      <form className="demo-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="demo-form-row">
            <Controller
              control={control}
              name="mainSection.name"
              register={register}
              render={props => (
                <Input 
                    className="demo-form-input"
                    required
                    label="Name"
                    placeholder="Insert Name"
                    name="name"
                    type="text"
                    onChange={e => props.onChange(e)}
                    value={props.value}
                    errorMessage={errors.mainSection?.name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="mainSection.email"
              register={register}
              render={props => (
                <Input 
                    className="demo-form-input"
                    required
                    label="Email"
                    placeholder="Insert Email Address"
                    type="email"
                    onChange={e => props.onChange(e)}
                    value={props.value}
                    errorMessage={errors.mainSection?.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="mainSection.dateOfBirth"
              register={register}
              render={props => (
                <DatePicker
                    className="demo-form-datepicker"
                    label="Date of Birth"
                    placeholder="Insert Date of Birth"
                    onChange={e => props.onChange(e)}
                    value={props.value}
                    type="date"
                    isClearable
                    required
                    errorMessage={errors.mainSection?.dateOfBirth?.message}
                />
              )}
            />
        </div>
        <div className="demo-form-btn-container">
            <input className="demo-form-btn" type="submit" />
        </div>
      </form>
    );
}