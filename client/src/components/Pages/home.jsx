import React from 'react';

import RepoList from '../RepoList';
import Loading from '../Loading';

import {withData} from 'app/decorators/withData';

@withData('https://api.github.com/repositories?page=3&per_page=100')
export default class Home extends React.Component {
    state = {
        error: null,
        loading: false,
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <RepoList repos={this.props.data}/>
            </div>
        );
    }
}