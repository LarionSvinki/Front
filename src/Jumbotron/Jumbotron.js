import React from "react";
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import jumbo1 from '../img/jumbo.jpg';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background: url(${jumbo1}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export function Jumbotron() {
  return(
  <Styles>
  <Jumbo fluid className="jumbo">
    <div className="overlay"></div>
    <Container>
      <h1>Travel</h1>
      <p>Nisi laboris nostrud anim nulla. Ex commodo voluptate 
        amet aliquip ad sint officia exercitation pariatur labore 
        fugiat laborum officia consequat. In incididunt non veniam 
        deserunt consequat aliquip aute esse eiusmod sunt eu fugiat 
        labore. Dolore consectetur Lorem consectetur exercitation 
        mollit et dolor voluptate occaecat est consequat. Aute tempor 
        ipsum veniam dolore eu quis aliqua aute voluptate. Officia 
        est eu ipsum magna. Sint qui officia labore velit fugiat ea.</p>
    </Container>
  </Jumbo> 
  </Styles>  
  )
}


export default Jumbotron;
