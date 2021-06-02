import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import UserService from "../services/user.service";
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import jumbo1 from '../img/jumbo.jpg'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";

const Slider = require('../Slider/Slider');
const Jumbo = require('../Jumbotron/Jumbotron');
const Footer = require('../Footer/Footer');

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div>
        <Slider.SliderOne />
          <h2 style={{margin: "2rem 1rem 2rem 7rem"}}>Best tours</h2>
          <Row style = {{marginBottom: "3rem"}}>
            <Col>
              <Card style={{ width: '18rem', backgroundColor: '#d1ddc5' }}>
                <Card.Img variant="top" src={require('../img/slider1.jpg')} />
                <Card.Body>
                  <Card.Title>Travel</Card.Title>
                  <Card.Text>
                    Voluptate nulla excepteur occaecat do officia est.
                  </Card.Text>
                  <Button variant="primary">Go order</Button>
                </Card.Body>

              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem', backgroundColor: '#d1ddc5' }}>
                <Card.Img variant="top" src={require('../img/slider1.jpg')} />
                <Card.Body>
                  <Card.Title>Travel</Card.Title>
                  <Card.Text>
                    Voluptate nulla excepteur occaecat do officia est.
                  </Card.Text>
                  <Button variant="primary">Go order</Button>
                </Card.Body>

              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem', backgroundColor: '#d1ddc5' }}>
                <Card.Img variant="top" src={require('../img/slider1.jpg')} />
                <Card.Body>
                  <Card.Title>Travel</Card.Title>
                  <Card.Text>
                    Voluptate nulla excepteur occaecat do officia est.
                  </Card.Text>
                  <Button variant="primary">Go order</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        <Jumbo.Jumbotron/>
        <Container style = {{marginBottom: '30px', marginTop: '60px'}}>
          <Row>
            <Col md={7} >
              <img src={jumbo1} alt={"image1"} height={400} marginTop={'10px'}/>
            </Col>
            <Col md={5}>
              <h2>About Us</h2>
              <p>
              TourAgency has been fulfilling people's dreams of a perfect holiday 
              since 1995-for 25 years! The tour operator offers trips to 39 countries 
              of the world with departures from more than 40 cities of Russia. TourAgency
               offers the best resorts and hotels in Turkey, Russia, Tunisia, Thailand, 
               Vietnam, Greece, Spain, and other countries. More than 14,000 travel agencies 
               across Russia sell tours from Tour Agency. We also have the largest franchise 
               network in the country, with more than 800 corporate offices. In addition, 
               the only premium agency network in Russia, Tour Agency Elite Service, is open 
               for our tourists, which currently has more than 50 sales offices.
              </p>
            </Col>
          </Row>

        <div className="form-group" style = {{paddingTop: "3rem"}}>
          <Row>
            <Col md={3}>
              <h3> Subscribe Us</h3>
            </Col>
            <Col>
              <MDBInput hint="Username" type="name" />
            </Col>
            <Col>
              <MDBInput hint="Your e-mail" type="email" />
            </Col>
            <Col md={3}>
              <Fragment>
                <MDBBtn color="dark" style = {{marginLeft: '70px'}}>Subscribe</MDBBtn>
              </Fragment>
            </Col>
          </Row>
        </div>
        </Container>
        {/* <InputGroup className="mb-3" style={{marginTop: '3rem'}}>
          <InputGroup.Prepend>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
          </InputGroup.Append>
        </InputGroup>

        <Button variant="secondary">Subscribe us</Button>{' '} */}

        <Footer.FooterPage/>


      </div>
    );
  }
}
