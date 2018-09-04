import React from 'react';
import styled from 'styled-components';

import fetchRepos from '../../services/repos/get';

import SearchBox from '../SearchBox';
import Loading from '../Loading';
import RepoList from '../RepoList';

const BodyWrap = styled.div``;
const HeadWrap = styled.div`
    padding: 1rem;
`;

const ErrorCard = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
`;

export default class Home extends React.Component {
    state = {
        error: null,
        loading: false,
        repos: [],
        input: {
            errors: null,
        }
    }

    componentDidMount() {
        this.fetchRepos();
    }

    async fetchRepos() {
        this.setState({
            loading: true,
        });

        try {
            const repos = await fetchRepos('https://api.github.com/repositories');
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

    handleInputchange = (e) => {
        e.preventDefault();
    }

    renderBodyContent(e) {
        const {error, repos, loading} = this.state;
        if (error) {
            return <ErrorCard>{error}</ErrorCard>
        }

        return (
            <React.Fragment>
                <Loading isLoading={loading} />
                <RepoList repos={repos} />
            </React.Fragment>
        );
    }

    render() {
        const {repos, loading} = this.state;
        return(
            <div>
                <HeadWrap>
                    Search: <SearchBox onChange={this.handleInputchange} />
                </HeadWrap>
                <BodyWrap>
                    {this.renderBodyContent()}
                </BodyWrap>
            </div>
        );
    }
}