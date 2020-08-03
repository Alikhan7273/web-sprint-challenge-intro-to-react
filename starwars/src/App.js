import React, { useState, useEffect} from 'react';
import axios from 'axios'
import Characters from './components/Character'
import styled from "styled-components";
import './App.css';
import {Col} from 'reactstrap'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Header = styled.h1`
  border: 4px solid black;
  padding: 1.5rem;
  `

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
          .then((response) => {
            setCharacters(response.data.results)
            console.log('response',response.data.results)
          })
          .catch((err) => {
            console.log("error", err)
          });
  }, []);

  return (
    <div className="App">
      <Header className="Header">Characters</Header>
      <Col xs='2' md='2'xl='2'>
      {characters.map(characters => <Characters characters={characters}/>)}
      {/* <Characters characters={characters}/> */}
      </Col>
    </div>
  );
}

export default App;
