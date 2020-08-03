// Write your Character component here
import React from 'react'
import styled, {keyframes} from 'styled-components'
import Crawl from 'react-star-wars-crawl'
import {Col} from 'reactstrap'


const kf = keyframes`
 0% {
    transform: scale(0);
  }
  40% {
    transform: scale(0.1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1) rotate(360deg);
    opacity: 1;
  }
`

const Container = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
div:hover {
    transition: 1s ease-in-out;
    transform: scale(1.3) rotate(720deg);
    background-color: rgba(240, 240, 240, 0.9);
}
`
const Cards = styled.div`

animation: ${kf} .8s ease-in-out backwards;
border: 2px solid black;
width: 30%;
min-width: 200px;
margin-bottom: 1rem;
background-color: rgba(226, 181, 45, 0.3);
color: yellow;
text-shadow: 2px 2px 2px black;
h2 {
    font-weight: bold;
}
`

const Character = ({characters}) => {



return (
    <Col xs='2' md='2'xl='2'>
    <Container className='container'>
        <Cards key={characters.name}>
            <div>
            <h2>{characters.name}</h2>
            <p>Height: {characters.height}</p>
            <p>Mass: {characters.mass}</p>
            <p>Gender: {characters.gender}</p>
            <p>Hair color: {characters.hair_color}</p>
            </div>
            {console.log('props',characters)}
        </Cards>
    </Container>
    </Col>
)
}

export default Character;