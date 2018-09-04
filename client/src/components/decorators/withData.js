import React from 'react';
import Axios from 'axios';

export const withData = (query) => (Component) => {
    return class extends React.Component {
        state = {
            data: [],
        }
        
        async componentDidMount() {
            const data = await this.fetchData();

            this.setState({
                data,
            });
        }

        fetchData = () => {
            Axios.get(query)
                .then(data => {
                    console.log('DATA', data);
                    this.setState({
                        data,
                    });
                })
                .catch(error => {
                    throw Error(error.message);
                });
        }

        render() {
            return(
                <Component {...this.props} {...this.state} />
            );
        }
    }   
}