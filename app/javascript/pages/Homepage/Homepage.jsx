import React, {useState} from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { NoCert } from '..'
import { Link } from 'react-router-dom'
import {CharacterCard} from '../components'
import CreateCharacter from '../Character/CreateCharacter'

const CreateCharacterCard = ({onClick}) => {
  return (
    <Card className="m-2 rounder shadow" style={{width: '18rem', height: '18rem'}}>
      <Card.Header>Create New Character</Card.Header>
      <Card.Body>
        <Card.Text>Click to add a new character below.</Card.Text>
      </Card.Body>
      <Button variant="secondary" onClick={onClick}>Create New</Button>
    </Card>
  )
}

export default Homepage = ({ loggedIn }) => {
  if(loggedIn){
    let [show, setShow] = useState(false);
    
    return(
    <Container className="fluid">
      <CreateCharacter show={show} onHide={() => setShow(false)}/>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col align="center">
          <CharacterCard name="Jar" weight="30" wealth="40"/>
        </Col>
        <Col align="center">
          <CreateCharacterCard onClick={()=>setShow(true)}/>
        </Col>
      </Row>
    </Container>
    
    )
  } else{
    return (
      <NoCert/>
    )
  }
}