import { default as React, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//import actions
import * as actionCreators from '../actions';

//import components
import Select from './Select';
import Navigation from './Navigation';

class Main extends Component {

  componentWillMount() {
    this.props.loadCountries();
  }

  render() {
    return (
      <div>
        <Navigation/>
        <Select {...this.props}/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
    details: state.details,
    showInfo: state.showInfo,
  };
};

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispachToProps)(Main);
