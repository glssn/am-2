import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik';

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      axios.post('http://localhost:5000/emails/', values)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">First name</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};


export {SignupForm};
