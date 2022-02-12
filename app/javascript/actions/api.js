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

