import React from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.div`
    padding: 1rem;
    margin: 0 auto;

    height: 100%;
    width: 100%;
    max-width: ${props => props.theme.body.width};

    border: 1px solid red;
`;

export default class Body extends React.Component {
    render() {
        return (
            <BodyWrapper>
                {this.props.children}
            </BodyWrapper>
        );
    }
}