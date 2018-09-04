import React from 'react';
import styled from 'styled-components';
import PrimaryNav from '../Navigation/primary';

const Wrapper = styled.div`
    padding: 1rem;

    width: 100%;

    background-color: ${props => props.theme.colors.grey};
`;

export default class Header extends React.PureComponent {
    render() {
        return (
            <Wrapper>
                <PrimaryNav/>
            </Wrapper>
        )
    }
}