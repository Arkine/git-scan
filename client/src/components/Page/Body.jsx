import React from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.div`
    position: relative;

    padding: 1rem;
    margin: 0 auto;

    height: 100%;
    min-height: 75vh;
    width: 100%;
    max-width: ${props => props.theme.body.width};

    border: 1px solid red;
`;

export default class Body extends React.PureComponent {
    render() {
        return (
            <BodyWrapper>
                {this.props.children}
            </BodyWrapper>
        );
    }
}