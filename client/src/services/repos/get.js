import axios from 'axios';

export default (query) => {
    const queryKeys = Object.keys(query);
    let queryString = '';


    for (let i=0; i<queryKeys.length; i++) {
        queryString += `${queryKeys[i]}=${query[queryKeys[i]]}`;
    }

    return axios.get(`https://api.github.com/repositories?=${queryString}`)
                .then(resp => {
                    return resp.json();
                })
                .then(data => {
                    return data;
                })
                .catch(error => {
                    throw Error(error.message);
                });

}