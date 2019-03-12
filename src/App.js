import React, {Component} from 'react';
import {connect} from 'react-redux';

import {simpleAction} from './actions/tempAction';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  testStore() {
    const {testAction} = this.props;
    testAction();
  }

  render() {
    const {store} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Blockchain!</p>
          <p>
            click the button to verify redux store:
            {store}
          </p>
          <button onClick={this.testStore}>HOLA</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state.result,
});

const mapDispatchToProps = dispatch => ({
  testAction: () => dispatch(simpleAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
