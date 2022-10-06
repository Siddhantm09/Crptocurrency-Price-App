import { useEffect, useState } from 'react';
import axios from "axios"
import "./App.css"
import Coin from './components/Coins';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React from "react";

import { Row, Col } from "react-bootstrap";



function App() {

  const [listOfCoins, setlistOfCoins] = useState([])
  const [searchWord, setSearchWord] = useState("")


  useEffect(() => {
    axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((response) => {
        setlistOfCoins(response.data.coins);
      }
      );
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  }
  )
  return (
    <div className='App'>

      <div className='sticky-top'>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>

              Cryptrice
            </Navbar.Brand>
          </Container>
          <Container>
            <InputGroup size='sm'>
              <Form.Control

                size='sm'
                placeholder="Bitcoin"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(event) => {
                  setSearchWord(event.target.value);
                }}
              />
            </InputGroup>
          </Container>
        </Navbar>
      </div>



      <div className="mt-5">

        <Row xs={1} md={3} lg={5} >
          {filteredCoins.map((coin) => {
            return <Col>
              <Card className=" mx-auto my-3 bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={coin.icon} />
                <Card.Body>
                  <Card.Title className='bg-dark text-white'>{coin.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className='bg-dark text-white'>Price : {coin.price}</ListGroup.Item>
                  <ListGroup.Item className='bg-dark text-white'>Symbol : {coin.symbol}</ListGroup.Item>

                </ListGroup>
                <Card.Body>
                  <Card.Link href={coin.websiteUrl}>{coin.name}</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          })}
        </Row>

      </div>

    </div>

  )
}
export default App;
