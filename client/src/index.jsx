import React from 'react';
import ReactDOM from 'react-dom';

import {ThemeProvider} from 'styled-components';
import Theme from './theme';

import App from 'app/components/app';

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);