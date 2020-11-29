import React, { useState } from 'react';
// styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animation';
// images
import logo from '../img/logo.svg';
// redux
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../actions/gamesAction';

function Nav() {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };

  const clearSearch = () => {
    dispatch({ type: 'CLEAR_SEARCHED' });
  };

  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={clearSearch}>
        <img src={logo} alt='' />
        <h1>Ignite</h1>
      </Logo>
      <SearchForm onSubmit={submitSearch}>
        <input type='text' value={textInput} onChange={inputHandler} />
        <button type='submit'>Search</button>
      </SearchForm>
    </StyledNav>
  );
}

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
`;

const SearchForm = styled(motion.form)`
  display: flex;
  justify-content: center;
  align-items: stretch;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1rem;
    border: none;
    outline: none;
    padding: 0 2rem;
    cursor: pointer;
    background: rebeccapurple;
    color: #fff;
    transition: all 0.2s;
    &:hover {
      background: #b43cc9;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Nav;
