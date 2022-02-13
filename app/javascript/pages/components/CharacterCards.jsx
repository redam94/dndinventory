import React, {useEffect, useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { getCharacterItemsByName } from '../../actions/api';


const calcWealth = (items) => {
    const total_wealth = items.reduce((acc, item) => acc += item?.value*item?.qty/1000 || 0, 0)
    return total_wealth
}

const calcWeight = (items) => {
    const total_weight = items.reduce((acc, item) => acc += item?.weight*item?.qty/1000 || 0, 0)
    return total_weight
}

export default CharacterCard = ({name}) => {
    const charPath = '/character/' + name
    const [weight, setWeight] = useState(0);
    const [wealth, setWealth] = useState(0);
    useEffect(() => {
        getCharacterItemsByName(name, true)
            .then( ( data ) => {
                items = data || [];
                setWealth(calcWealth(items));
                setWeight(calcWeight(items));
            })
    }, [name])
    return (
        <Card className="m-2 rounded shadow" style={{width:'18rem', height:'18rem'}}>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                {<Card.Text>This is currently carrying {weight}lbs of items.</Card.Text>}
                {<Card.Text>The combined value of all valuables is {wealth}gp.</Card.Text>}
            </Card.Body>
            <Button variant="secondary" as={Link} to={charPath}>View Inventory</Button>
        </Card>
    )
}