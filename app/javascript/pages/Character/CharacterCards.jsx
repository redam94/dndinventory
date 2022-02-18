import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getCharacterItemsByName } from '../../actions/api';
import EditCharacter from './EditCharacter';

const calcWealth = (items) => {
    const total_wealth = items.reduce((acc, item) => acc += item?.value * item?.qty || 0, 0)
    return total_wealth / 1000
}

const calcWeight = (items) => {
    const total_weight = items.reduce((acc, item) => acc += item?.weight * item?.qty || 0, 0)
    return total_weight / 1000
}

export default CharacterCard = ({ getCharacter, name, id }) => {
    const charPath = '/character/' + name
    const [weight, setWeight] = useState(0);
    const [wealth, setWealth] = useState(0);
    const [show, setShow] = useState(false);

    const onHide = () => {
        setShow(false);
        getCharacter();
    }
    useEffect(() => {
        getCharacterItemsByName(name, true)
            .then((data) => {
                items = data || [];
                setWealth(calcWealth(items));
                setWeight(calcWeight(items));
            })
    }, [name])
    return (
        <>
            <EditCharacter name={name} id={id} show={show} onHide={onHide} />
            <Card className="m-2 rounded shadow" style={{ width: '18rem', height: '18rem' }}>
                <Card.Header onClick={() => setShow(true)}>{name}</Card.Header>
                <Card.Body>
                    {<Card.Text>{name} is currently carrying {weight}lbs of items.</Card.Text>}
                    {<Card.Text>The combined value of all valuables is {wealth}gp.</Card.Text>}
                </Card.Body>
                <Button variant="secondary" as={Link} to={charPath}>View Inventory</Button>
            </Card>
        </>
    )
}