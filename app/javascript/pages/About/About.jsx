import React from 'react';
import { Container } from 'react-bootstrap';

export default About = () => {

    return (
        <div style={{minWidth:'300px', minHeight:'500px'}} className="w-50 m-2 p-2 border rounded shadow">
        <h1>D&D Inventory</h1>
        <p style={{textIndent:'20px', fontSize:'18px', fontWeight:'150'}} >
            Worry no more about your inventory troubles. D&D Inventory is here to help you organize your potions, jewels, scrolls, weird hats and other items you may have carelessly strewn about your hole(s).
            Have multiple characters, no problem. Need to trade items with each other (or steal an item) don't pull out your pencils and erasers just use a quick transaction to ensure no duplication. Adding new items is as simple as filling out its name and properties.
        </p>
        </div>
    )
}