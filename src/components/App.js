import React from 'react';
import '../assets/css/app.css';
import Ipod from './Ipod';
import { connect } from 'react-redux';

//this compoonent is just the outer container component of IPOD so set the main background
// this component renders the main IPOD to the display

class App extends React.Component {
  render() {
    const { styles } = this.props;
    return (
      <div className="app" style={styles}>
        <Ipod />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    styles: state.theme.background,
  };
}

export default connect(mapStateToProps)(App);
