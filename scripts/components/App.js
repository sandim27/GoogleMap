import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadCountries} from '../actions/loadCountries';
import {getDetails} from '../actions/getDetails';
import Select from './Select';
import Map from './Map';
import DescriptionCountry from './DescriptionCountry';

class App extends React.Component {
  componentWillMount() {
    this.props.loadCountries();
  }
  changeDetails(details) {
    this.props.getDetails(details);
  }
  render() {
    return (
      <div>
        <Select options={this.props.issues} details={this.props.details} changeDetails={this.changeDetails.bind(this)}/>
        <DescriptionCountry details={this.props.details}/>
        <Map/>
      </div>
    );
  }
}


export default connect(
    (state) => {
      return {counters:state.counters,issues:state.issues,details:state.details};
    },
    (dispatch) => bindActionCreators({loadCountries,getDetails},dispatch)
)(App);


