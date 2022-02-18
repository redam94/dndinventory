import React, { useState, useEffect, cloneElement } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Wrapper = ({ children, item }) => {
    return (
        <>
            {children.map(child => cloneElement(child, { onClick: () => item.description && alert(item.description) }))}
        </>
    )
}


export default Items = ({ loggedIn, style }) => {

    const params = useParams();
    const navigate = useNavigate();
    let [items, setItems] = useState([
        {
            id: 0,
            name: '',
            qty: 0,
            value: 0,
            weight: 0,
            description: ""
        }]);

    const handleClick = (item) => { return () => navigate(`/item/${params.name}/${item.id}/edit`) };

    useEffect(() => {
        loggedIn || navigate('/');
        loggedIn && axios.get("/api/v1/items/" + params.name, { useCredentials: true })
            .then((response) => {
                if (response.status === 200) {
                    setItems(response.data.items)
                }
            });
    }, [loggedIn])
    return (
        <div style={style}>
            <div className="bg-light p-2 m-2 w-75 rounded shadow" style={{ minWidth: "350px" }}>
                <h1>{params.name}'s Inventory</h1>
                <Table responsive striped hover bordered className="rounded shadow">
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
                                <tr key={item.id} >
                                    <th style={{ fontWeight: 100 }} onClick={handleClick(item)}>
                                        {index}
                                    </th>
                                    <Wrapper item={item}>
                                        <th>{item?.name}</th>
                                        <th>{item?.qty}</th>
                                        <th>{item?.value / 1000 || 0}</th>
                                        <th>{item?.weight / 1000 || 0}</th>
                                    </Wrapper>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <Button className="w-25 mx-2" variant="primary" as={Link} to={"/createitem/" + params.name}>Add Item</Button>
                <Button className="w-25 mx-2" variant='secondary' as={Link} to={"/"}>Back</Button>
            </div>
        </div>
    )
}