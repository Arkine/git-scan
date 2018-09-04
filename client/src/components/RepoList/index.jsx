import React from 'react';
import styled from 'styled-components';

import ListItem from './listItem';

export default class RepoList extends React.PureComponent {

    renderRepoItems() {
        const {repos} = this.props;

        if (!repos.data) {
            return null;
        }

        return repos.data.map(repo => <ListItem key={`repo-${repo.id}`}>{repo.name}</ListItem>);
    }
    
    render() {
        const {repos} = this.props;

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