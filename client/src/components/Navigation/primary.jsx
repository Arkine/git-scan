import React from 'react';
import {NavLink} from 'react-router-dom';

export default class PrimaryNav extends React.PureComponent {
    render() {
        return(
            <nav>
                <NavLink to='/'>Home</NavLink>
            </nav>
        )
    }
}