import Axios from 'axios';

export default (url, query) => {
    let queryString = '';

    if (query) {
        const queryKeys = Object.keys(query);
    
        for (let i=0; i<queryKeys.length; i++) {
            queryString += `${queryKeys[i]}=${query[queryKeys[i]]}`;
        }
    }

    return Axios.get(`${url}?=${queryString}`)
            .then(data => {
                return data;
            })
            .catch(error => {
                throw Error(error.message);
            });

}