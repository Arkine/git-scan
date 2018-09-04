import React from 'react';

import fetchRepos from '../../services/repos/get';

import RepoList from '../RepoList';
import Loading from '../Loading';

export default class Home extends React.Component {
    state = {
        error: null,
        loading: false,
        repos: [],
    }

    componentDidMount() {
        this.fetchRepos();

    }

    async fetchRepos() {
        this.setState({
            loading: true,
        });

        try {
            const repos = await fetchRepos();
            console.log(repos);
            this.setState({
                repos,
                loading: false,
            }); 
        } catch(error) {
            this.setState({
                error: error.message,
                loading: false,
            });
        }
    }

    render() {
        const {repos, loading} = this.state;
        return(
            <div>
                <Loading isLoading={loading} />
                <RepoList repos={repos} />
            </div>
        );
    }
}