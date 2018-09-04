import React from 'react';

import fetchRepos from '../../services/repos/get';

import RepoList from '../RepoList';
import Loading from '../Loading';

import {withData} from '../decorators/withData';

@withData('https://api.github.com/repositories')
export default class Home extends React.Component {
    state = {
        error: null,
        loading: false,
        repos: [],
    }

    async fetchRepos() {
        this.setState({
            loading: true,
        });

        try {
            const repos = await fetchRepos();

            this.setState({
                repos,
            }); 
        } catch(error) {
            this.setState({
                error: error.message,
            });
        }
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <Loading isLoading={this.state.loading} />
                <RepoList />
            </div>
        );
    }
}