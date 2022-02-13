import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Button, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default Items = ({ loggedIn, style }) => {
    const params = useParams();
    const navigate = useNavigate();
    let [items, setItems] = useState([
        {
        id:0,
        name: '', 
        qty: 0, 
        value: 0, 
        weight: 0, 
        description: ""
    }]);
    const handleClick = (item) => {return () => navigate(`/item/${params.name}/${item.id}/edit`)};

    useEffect(() => {
        loggedIn || navigate('/');
        loggedIn && axios.get("/api/v1/items/"+params.name, {useCredentials: true})
            .then((response) => {
                if(response.status === 200){
                    setItems(response.data.items)
                    console.log(response)
                }
            });
    }, [loggedIn])
    return (
        <div style={style}>
        <div className="bg-light p-2 m-2 w-75 rounded shadow" style={{minWidth: "350px"}}>
        <h1>{params.name}'s Inventory</h1>
        <Table striped hover bordered className="rounded shadow">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Item Name</th>
                    <th>Qty</th>
                    <th>Value(gp)</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
        {items.map((item, index) => {
            return (
                    <tr key={index} onClick={handleClick(item)}>
                    <th>{index}</th>
                    <th>{item?.name}</th>
                    <th>{item?.qty}</th>
                    <th>{item?.value/1000 || 0}</th>
                    <th>{item?.weight/1000 || 0}</th>
                    </tr>
                )
        })}
            </tbody>
        </Table>
        <Button className="w-25 mx-2" variant="primary" as={Link} to={"/createitem/"+params.name}>Add Item</Button>
        <Button className="w-25 mx-2" variant='secondary' as={Link} to={"/"}>Back to Characters</Button>
        </div>
        </div>
    )
}