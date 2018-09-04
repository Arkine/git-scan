import Axios from 'axios';

export default (query) => {
    let queryString = '';

    if (query) {
        const queryKeys = Object.keys(query);
    
        for (let i=0; i<queryKeys.length; i++) {
            queryString += `${queryKeys[i]}=${query[queryKeys[i]]}`;
        }
    }

    return Axios.get(`https://api.github.com/repositories?=${queryString}`)
            .then(data => {
                return data;
            })
            .catch(error => {
                throw Error(error.message);
            });

}