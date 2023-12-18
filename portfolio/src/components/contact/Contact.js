import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: fit-content;
    
    ::-webkit-scrollbar { display: none; }
    
  
  body {
    font-family: Arial;
    background: linear-gradient(to bottom, #dc2424, #4a569d);
    height: 100%;
    margin: 0;
    color: #555;
    
  }
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;
const StyledSuccess = styled.div`
  color: green;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const initialState = {
  name: '',
  email: '',

  message: '',
  gender: '',

};

function App() {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Submitted Successfully");
    console.log(state)


    //? Simple Validation of the Form
    for (let key in state){
      if(state[key] ===''){
        setError(`You must provide the ${key}`)
        return
      }

    }
    setError('');
    //Email Validation if want 
    // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // const test = regex.test(state.email);
    // console.log(test)
    console.log("Success!!!");
    setSuccess("Successfully Logged in")
    setState(initialState)
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <div className="contact" id="contact">

        <div className="container-fluid">

        
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <label htmlFor="name">Name</label>
          <StyledInput type="text" name="name" value={state.name} onChange={handleInput} />
          <label htmlFor="email">Email</label>
          <StyledInput type="email" name="email" value={state.email} onChange={handleInput} />
      

          <StyledFieldset>
            <legend>Gender</legend>
            <label>
              <input
                type="radio"
                value="female"
                name="gender"
                checked={state.gender === 'female'}
                onChange={handleInput}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="male"
                name="gender"
                checked={state.gender === 'male'}
                onChange={handleInput}
              />
              Male
            </label>
          </StyledFieldset>

          <label htmlFor="message">Message</label>
          <StyledTextArea name="message" value={state.message} onChange={handleInput} />
          {error && <StyledError><p>{error}</p></StyledError>}
          {!error && <StyledSuccess><p>{success}</p></StyledSuccess>}

          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </div>
    </div>
  );
}

export default App;
