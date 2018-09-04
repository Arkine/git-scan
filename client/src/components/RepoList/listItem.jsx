import React from 'react';
import styled from 'styled-components';

import ListRating from './listRating';

const RepoLink = styled.a`
    display: block;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 0;
`;

export default class ListItem extends React.PureComponent {
    render() {
        const {repo} = this.props;
        return (
            <Wrapper>
                <RepoLink href={repo.html_url} target='_blank'>{repo.name}</RepoLink>
                <ListRating />
            </Wrapper>
        );
    }
}