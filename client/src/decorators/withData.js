import React from 'react';
import Axios from 'axios';

import Loading from 'app/components/Loading';

export const withData = (query, fetchOpts) => (Component) => {
    return class extends React.Component {
        state = {
            loading: false,
            data: [],
        }
        
        async componentDidMount() {
            const data = await this.fetchData();

            this.setState({
                data,
            });
        }

        fetchData = () => {
            Axios.get(query, fetchOpts)
                .then(data => {
                    this.setState({
                        data,
                    });
                })
                .catch(error => {
                    throw Error(error.message);
                });
        }

        render() {
            if (this.state.loading) {
                return <Loading />;
            }
            return(
                <Component {...this.props} {...this.state} />
            );
        }
    }   
}