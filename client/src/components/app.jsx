import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Page from 'app/components/Page';

import theme from '../theme';

import Home from './Pages/home';
import List from './list';

export default class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Switch>
                        <Page>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/list' component={List} />
                        </Page>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}