import React from 'react';

export default class ListItem extends React.PureComponent {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}