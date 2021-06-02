import React, { Component } from "react";
import "../App.css";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
  Modal,
} from "react-bootstrap";

import axios from "axios";

export default class Tour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      userId: "",
      title: "",
      body: "",
      show: false, // Прописываем state для состояния модульного окна
    };
  }

  changeHandler = (e) => { // функция которая меняет state согласно значению в input
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => { // функция для отправки на сервер запроса
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`http://localhost:8080/tour`, this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/tour`).then((res) => {
      const todo = res.data;
      console.log(todo);
      this.setState({ todo });
    });
  }

  handleShow = () => { 
    this.setState({ show: true });
    console.log(this.state.show);
  };

  handleClose = () => {
    this.setState({ show: false });
    console.log(this.state.show);
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        {this.state.todo.map((todo, id_tours) => {
          return (
            <div>
              <Card
                style={{
                  width: "25rem",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, .2)",
                  borderRadius: "10px",
                  paddingBottom: "3px",
                }}
                key={id_tours}
              >
                <Card.Title>Tour {id_tours + 1}</Card.Title>
                <Card.Img
                  variant="top"
                  src={require("../img/card1.jpg")}
                  style={{
                    borderRadius: "10px",
                  }}
                />
                <Card.Body>
                  <Card.Title>{todo.name}</Card.Title>
                  <Card.Text>{todo.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem style={{ backgroundColor: "#f7f7f7" }}>
                    Country: {todo.country}
                  </ListGroupItem>
                  <ListGroupItem style={{ backgroundColor: "#f7f7f7" }}>
                    City: {todo.city}
                  </ListGroupItem>
                  <ListGroupItem style={{ backgroundColor: "#f7f7f7" }}>
                    From {todo.start} To {todo.end}
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Text>Price: {todo.price}$</Card.Text>
                    </Col>
                    <Col>
                      <Button
                        variant="outline-success"
                        style={{
                          padding: "5px 30px 5px 30px",
                          marginLeft: "5rem",
                          marginTop: "2.5rem",
                        }}
                        onClick={this.handleShow} // 1. Прописываем событие onClick для нужной кнопки 
                      >
                        Book
                      </Button>{" "}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Modal show={this.state.show} onHide={this.handleClose}>  
                <Modal.Header closeButton>
                  <Modal.Title>Book tour</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form // интересующая тебя форма
                    onSubmit={this.submitHandler}
                    style={{
                      position: "relative",
                      zIndex: "1000",
                    }}
                  >
                    <div>
                      <input
                        type="number"
                        name="userId"
                        value={userId}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="body"
                        value={body}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <button type="submit">push</button>
                  </form>
                </Modal.Body>
              </Modal>
            </div>
          );
        })}
      </div>
    );
  }
}
