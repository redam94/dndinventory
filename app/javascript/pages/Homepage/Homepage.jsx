import React, {useState, useEffect} from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { NoCert } from '..'
import { Link } from 'react-router-dom'
import {CharacterCard} from '../components'
import CreateCharacter from '../Character/CreateCharacter'
import axios from 'axios'


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

export default Homepage = ({ loggedIn, style }) => {
  let [show, setShow] = useState(false);
  let [characters, setCharacters] = useState([]);
  
  const getCharacter = () => {
    axios.get('/api/v1/characters', {withCredentials: true})
      .then((response) => {
        if(response.data?.characters){
          setCharacters(response.data?.characters)
        }
      })
      .catch((error) => {console.log(error)})
  }
  
  useEffect(() => getCharacter(), [])

  if(loggedIn){
    return(
    <div className="fluid" style={style}>
      <CreateCharacter show={show} onHide={() => {setShow(false); getCharacter();}}/>
      <Row xs={1} md={2} lg={3} className="g-4">
        {characters.map(({id, name}) => {
        return (
        <Col key={id} align="center">
          <CharacterCard name={name} weight="30" wealth="40"/>
        </Col>)})}
        <Col align="center">
          <CreateCharacterCard onClick={()=>setShow(true)}/>
        </Col>
      </Row>
    </div>
    
    )
  } else{
    return (
      <div style={style}>
      <NoCert/>
      </div>
      
    )
  }
}