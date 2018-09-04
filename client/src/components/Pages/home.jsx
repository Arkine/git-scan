import React from 'react';

import RepoList from '../RepoList';
import Loading from '../Loading';

import {withData} from 'app/decorators/withData';

@withData('https://api.github.com/repositories')
export default class Home extends React.Component {
    state = {
        error: null,
        loading: false,
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <Loading isLoading={this.state.loading} />
                <RepoList repos={this.props.data}/>
            </div>
        );
    }
}