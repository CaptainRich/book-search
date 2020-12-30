import React, { useState } from 'react';

// These imports take the submitted data and send it to the server.
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';

// This import takes care of token validation/storage
import Auth from '../utils/auth';


import { Form, Button } from 'react-bootstrap';

//import { createUser } from '../utils/API';

const SignupForm = () => {

  const [formState, setFormState] = useState({ username: '', email: '', password: '' });

  const [addUser, { error }] = useMutation(ADD_USER);  // returns the 'addUser' function

  // Update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };



  // set initial form state
  // const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // // set state for form validation
  // const [validated] = useState(false);
  // // set state for alert
  // const [showAlert, setShowAlert] = useState(false);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserFormData({ ...userFormData, [name]: value });
  // };

  
  // Submit the form (async)
  const handleFormSubmit = async event => {
    event.preventDefault();
  
    // Use try/catch instead of promises to handle errors
    try {
      // Execute the 'addUser' mutation and pass in variable data from the form
      const { data } = await addUser({
        variables: { ...formState }
      });
      
      Auth.login( data.addUser.token );
    } 
    catch (e) {
      console.error(e);
    }
  };

/////////////////////////////////////////////////////////////////////////////
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   // check if form has everything (as per react-bootstrap docs)
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   try {
  //     const response = await createUser(userFormData);

  //     if (!response.ok) {
  //       throw new Error('something went wrong!');
  //     }

  //     const { token, user } = await response.json();
  //     console.log(user);
  //     Auth.login(token);
  //   } catch (err) {
  //     console.error(err);
  //     setShowAlert(true);
  //   }

  //   setUserFormData({
  //     username: '',
  //     email: '',
  //     password: '',
  //   });
  // };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        {/* <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert> */}

        <Form.Group>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleChange}
            value={formState.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleChange}
            value={formState.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleChange}
            value={formState.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(formState.username && formState.email && formState.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
      {error && <div>Sign up failed</div>}
    </>
  );
};

export default SignupForm;
