import { yupResolver } from '@hookform/resolvers/yup';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { TimePicker } from '@material-ui/pickers';
import alertify from 'alertifyjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';
import timeToString from '../../utils/Date';

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
    then: yup
      .number()
      .min(1, 'Minimum 1 required')
      .typeError('Number of slices is required')
      .required(),
  }),
  diameter: yup.mixed().when('type', {
    is: (type) => type === 'pizza',
    then: yup
      .number()
      .min(0.01, 'Minimum 0.01 required')
      .typeError('Diameter is required')
      .required(),
  }),
  spiciness_scale: yup.mixed().when('type', {
    is: (type) => type === 'soup',
    then: yup
      .number()
      .min(1, 'Minimum 1 required')
      .max(10, 'Maximum of 10 allowed')
      .typeError('Spiciness scale is required')
      .required(),
  }),
  slices_of_bread: yup.mixed().when('type', {
    is: (type) => type === 'sandwich',
    then: yup
      .number()
      .min(1, 'Minimum 1 required')
      .typeError('Slices of bread is required')
      .required(),
  }),
});

const Form = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const [selectedDate, setSelectedDate] = useState(null);
  const [types, setTypes] = useState('');
  const [pizza, setPizza] = useState(false);
  const [soup, setSoup] = useState(false);
  const [sandwich, setSandwich] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const resetFields = () => {
    setPizza(false);
    setSoup(false);
    setSandwich(false);

    setSelectedDate(null);
    setTypes('');
    setValue('preparation_time', null, {
      shouldValidate: false,
    });
    reset();
  };

  const handleSend = async (data) => {
    try {
      await axios.post(`${API_URL}/dishes`, data).then((res) => {
        console.log(res);
        alertify.success('Sent successfully');
        resetFields();
      });
    } catch (err) {
      alertify.alert('Error', err.message, () => {
        alertify.error('Something went wrong');
      });
    }
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
        onChange={(newValue) => {
          setSelectedDate(newValue);
          setValue('preparation_time', timeToString(newValue), {
            shouldValidate: true,
          });
        }}
        InputProps={{ ...register('preparation_time') }}
        error={!!errors.preparation_time}
        helperText={errors.preparation_time?.message}
      />
      <TextField
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
            label="Number of slices"
            error={!!errors.no_of_slices}
            helperText={errors.no_of_slices?.message}
            inputProps={{
              type: 'number',
              step: 1,
              ...register('no_of_slices'),
            }}
          />
          <TextField
            className="customField"
            InputLabelProps={{
              className: 'field',
            }}
            style={{ overflow: 'hidden' }}
            label="Diameter"
            error={!!errors.diameter}
            helperText={errors.diameter?.message}
            inputProps={{
              type: 'number',
              step: 0.01,
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
          label="Spiciness scale"
          error={!!errors.spiciness_scale}
          helperText={errors.spiciness_scale?.message}
          inputProps={{
            type: 'number',
            step: 1,
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
          label="Slices of bread"
          error={!!errors.slices_of_bread}
          helperText={errors.slices_of_bread?.message}
          inputProps={{
            type: 'number',
            step: 1,
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
