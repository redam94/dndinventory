import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCharactersByParty } from '../../actions/api';

export default PartyPage = ({ loggedIn, user }) => {
    const navigate = useNavigate();
    const params = useParams();
    const { party } = params;
    
    const getCharactersInParty = (party) => { 
        const characters = getCharactersByParty(party)
            .then( (res) => {
                return res?.data?.characters || []
            });
        return
    } 
    return (
        <>
        
        </>
    )
}