import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Layout extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar />
            <div className='page'>
                {this.props.children}
            </div>
            <Footer />
        </React.Fragment>
    );
  }
}

export default Layout;