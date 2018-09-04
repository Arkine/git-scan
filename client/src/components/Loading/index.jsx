import React from 'react';
import styled from 'styled-components';

export default styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: block;
    height: 100%;
    width: 100%;

    background-color: ${props => props.theme.colors.white};
`;