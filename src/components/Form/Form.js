import { yupResolver } from '@hookform/resolvers/yup';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { TimePicker } from '@material-ui/pickers';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 100%;

  .customField {
    margin-top: 20px;
  }

  .field {
    overflow: hidden;
  }
`;

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  preparation_time: yup.string().required('Preparation time is required'),
  type: yup.string().required('Dish type is required'),
  no_of_slices: yup.mixed().when('type', {
    is: (type) => type === 'pizza',
    then: yup.number().typeError('Number of slices is required').required(),
  }),
  diameter: yup.mixed().when('type', {
    is: (type) => type === 'pizza',
    then: yup.number().typeError('Diameter is required').required(),
  }),
  spiciness_scale: yup.mixed().when('type', {
    is: (type) => type === 'soup',
    then: yup.number().typeError('Spiciness scale is required').required(),
  }),
  slices_of_bread: yup.mixed().when('type', {
    is: (type) => type === 'sandwich',
    then: yup.number().typeError('Slices of bread is required').required(),
  }),
});

const Form = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [types, setTypes] = useState('');
  const [pizza, setPizza] = useState(false);
  const [soup, setSoup] = useState(false);
  const [sandwich, setSandwich] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSend = (data) => {
    axios
      .post(`https://frosty-wood-6558.getsandbox.com:443/dishes`, data)
      .then((res) => {
        console.log(res);
        alert('Request send');
      });
  };

  useEffect(() => {
    if (types === 'pizza') {
      setPizza(true);
      setSoup(false);
      setSandwich(false);
    }
    if (types === 'soup') {
      setPizza(false);
      setSoup(true);
      setSandwich(false);
    }

    if (types === 'sandwich') {
      setPizza(false);
      setSoup(false);
      setSandwich(true);
    }
  }, [types]);

  return (
    <FormWrapper onSubmit={handleSubmit(handleSend)}>
      <TextField
        InputLabelProps={{
          className: 'field',
        }}
        style={{ overflow: 'hidden' }}
        label="Name"
        InputProps={{ ...register('name') }}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TimePicker
        className="customField"
        InputLabelProps={{
          className: 'field',
        }}
        ampm={false}
        openTo="hours"
        views={['hours', 'minutes', 'seconds']}
        format="HH:mm:ss"
        label="Preparation time"
        value={selectedDate}
        onChange={setSelectedDate}
        InputProps={{ ...register('preparation_time') }}
        error={!!errors.preparation_time}
        helperText={errors.preparation_time?.message}
      />
      <TextField
        id="standard-select-currency"
        InputLabelProps={{
          className: 'field',
        }}
        select
        className="customField"
        label="Dish type"
        value={types}
        onChange={(e) => {
          setTypes(e.target.value);
        }}
        inputProps={{ ...register('type') }}
        error={!!errors.type}
        helperText={errors.type?.message}
      >
        <MenuItem value="pizza">Pizza</MenuItem>
        <MenuItem value="soup">Soup</MenuItem>
        <MenuItem value="sandwich">Sandwich</MenuItem>
      </TextField>
      {pizza ? (
        <>
          <TextField
            className="customField"
            InputLabelProps={{
              className: 'field',
            }}
            style={{ overflow: 'hidden' }}
            id="standard-basic"
            label="Number of slices"
            error={!!errors.no_of_slices}
            helperText={errors.no_of_slices?.message}
            inputProps={{
              type: 'number',
              step: 1,
              min: 0,
              ...register('no_of_slices'),
            }}
          />
          <TextField
            className="customField"
            InputLabelProps={{
              className: 'field',
            }}
            style={{ overflow: 'hidden' }}
            id="standard-basic"
            label="Diameter"
            error={!!errors.diameter}
            helperText={errors.diameter?.message}
            inputProps={{
              type: 'number',
              step: 0.01,
              min: 0,
              ...register('diameter'),
            }}
          />
        </>
      ) : null}
      {soup ? (
        <TextField
          className="customField"
          InputLabelProps={{
            className: 'field',
          }}
          style={{ overflow: 'hidden' }}
          id="standard-basic"
          label="Spiciness scale"
          error={!!errors.spiciness_scale}
          helperText={errors.spiciness_scale?.message}
          inputProps={{
            type: 'number',
            step: 1,
            min: 1,
            max: 10,
            ...register('spiciness_scale'),
          }}
        />
      ) : null}
      {sandwich ? (
        <TextField
          className="customField"
          InputLabelProps={{
            className: 'field',
          }}
          style={{ overflow: 'hidden' }}
          id="standard-basic"
          label="Slices of bread"
          error={!!errors.slices_of_bread}
          helperText={errors.slices_of_bread?.message}
          inputProps={{
            type: 'number',
            step: 1,
            min: 1,
            ...register('slices_of_bread'),
          }}
        />
      ) : null}
      <Button
        className="customField"
        variant="contained"
        color="primary"
        type="submit"
      >
        Send
      </Button>
    </FormWrapper>
  );
};

export default Form;
