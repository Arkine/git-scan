import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input.attrs({
    type: 'text',
})`
    border-radius: 30px;
    padding: 0.5rem;

    border: 1px solid ${props => props.theme.colors.grey};
`;

export default class SearchBox extends React.Component {
    render() {
        return (
            <SearchInput {...this.props} />
        );
    }
}