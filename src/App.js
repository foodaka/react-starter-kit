import React, {Component} from 'react';
import {connect} from 'react-redux';

import {simpleAction} from './actions/tempAction';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  testStore = () => {
    const {testAction} = this.props;
    testAction();
  };

  render() {
    const {store} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>Hello Blockchain!</div><br />
          <div>click the button to verify redux store</div><br />
          <div>{store}</div><br />
          <button onClick={this.testStore}>HOLA</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state.tempReducer.result,
});

const mapDispatchToProps = dispatch => ({
  testAction: () => dispatch(simpleAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
