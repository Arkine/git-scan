import React from 'react';
import styled from 'styled-components';

export default class RepoList extends React.PureComponent {

    renderRepoItems() {
        const {repos} = this.props;

        if (!repos.data) {
            return null;
        }

        return repos.data.map(repo => <div key={`repo-${repo.id}`}>{repo.name}</div>);
    }
    
    render() {
        const {repos} = this.props;

        console.log('repo list', this.props);
        if (!repos) {
            return null;
        }
        return(
            <div>
               {this.renderRepoItems()}
            </div>
        );
    }
}