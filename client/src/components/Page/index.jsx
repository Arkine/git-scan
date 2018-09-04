import React from 'react';

import Header from './header';
import Body from './body';
import Footer from './footer';

export default class Page extends React.PureComponent {
    render() {
        return(
            <React.Fragment>
                <header>
                    <Header />
                </header>
                <main>
                    <Body>
                        {this.props.children}
                    </Body>
                </main>
                <footer>
                    <Footer />
                </footer>
            </React.Fragment>
        );
    }
}