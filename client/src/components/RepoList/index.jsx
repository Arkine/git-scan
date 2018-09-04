import React from 'react';
import styled from 'styled-components';

import sort from '../../helpers/sort';

import ListItem from './listItem';

export default class RepoList extends React.PureComponent {

    sortItems(filter) {

    }

    renderRepoItems() {
        const {repos} = this.props;

        if (!repos.data) {
            return null;
        }

        const alphaSort = {
            filter: (a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            }
        };

        const sorted = sort(repos.data, alphaSort.filter);

        return sorted.map((repo, i) => <ListItem key={`repo-${i}`} repo={repo} />);
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