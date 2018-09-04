import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default class ListRating extends React.PureComponent {
    render() {
        return (
            <FontAwesomeIcon icon={faStar} />
        );
    }
}