import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default Homepage = () => {
    return (

<Card className="m-4 rounded">
  <Card.Header as="h3">All your inventory needs</Card.Header>
  <Card.Body>
    <Card.Title>Can't keep track of all your items? Don't remember what you left in the hole? Did Jar steal that?</Card.Title>
    <Card.Text>
      Bring character inventory into the future. Track your item quantities, abilities, and life cycle.
    </Card.Text>
    <Button variant="primary" as={Link} to="/login">Login</Button>{' '}
    <Button variant="secondary" as={Link} to="/signup">Sign Up</Button>
  </Card.Body>
</Card>

    )
}