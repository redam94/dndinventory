import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default CharacterCard = ({name, wealth, weight}) => {
    const charPath = '/character/' + name
    return (
        <Card className="m-2 rounded shadow" style={{width:'18rem', height:'18rem'}}>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                {weight && <Card.Text>This is currently carrying {weight}lbs of items.</Card.Text>}
                {wealth && <Card.Text>The combined value of all valuables is {wealth}gp.</Card.Text>}
            </Card.Body>
            <Button variant="secondary" as={Link} to={charPath}>View Inventory</Button>
        </Card>
    )
}