import axios from 'axios';

export const getCharacterItemsByName = async (name, loggedIn) => {
    if (!loggedIn) {
        console.log("loggedIn", loggedIn);
        return [];
    }else{
        return axios
                .get("/api/v1/items/"+name, {useCredentials: true})
                .then((response) => {
                    if(response.status === 200){
                    return response.data?.items || [];
                    }
                });
    }
};

export const getItemById = async (id, loggedIn) => {
    if(!loggedIn) {
        console.log("loggedIn", loggedIn);
        return {};
    }else{
        return axios.get("/api/v1/items/show/"+id, {useCredentials: true})
            .then((res) => {
                if(res.status === 200){
                    return res.data?.item || {};
                }else{
                    console.log(res);
                    return {};
                }
            })
    }
};

export const editItemById = async (data, id) => {
        return axios.put(`/api/v1/items/${id}`, { item: {
            "name": data.name,
            "qty": data.qty,
            "weight": data.weight*1000,
            "description": data.description,
            "value": data.value*1000,
        }}, {useCredentials: true})
};

export const createItem = async (data, name) => {
    return axios.post(`/api/v1/items/${name}`, { item: {
        "name": data.name,
        "qty": data.qty,
        "weight": data.weight*1000,
        "description": data.description,
        "value": data.value*1000,
    }}, {useCredentials: true})
};

export const deleteItemById = async (id) => {
    return axios.delete(`/api/v1/items/destroy/${id}`, { useCredentials: true})
};

export const createCharacter = async (data) => {
    return axios.post('/api/v1/characters', { character: {
        name: data
    } }, {withCredentials: true})
};

export const editCharacterById = async (id, data) => {
    return axios.put(`/api/v1/characters/${id}`, { character: {
        name: data
    }}, {withCredentials: true})
};

export const deleteCharacterById = async (id) => {
    return axios.delete(`/api/v1/characters/destroy/${id}`, {withCredentials: true})
};

export const getCharacters = async () => {
    return axios.get('/api/v1/characters', { withCredentials: true })
};