import { default as React, Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class Autocomplete extends Component {
  getDetails(val) {
    this.props.changeDetails(val);
  }

  render() {
    return (
        <Select ref="stateSelect" labelKey='name' placeholder={this.props.details.name} options={this.props.options} onChange={this.getDetails.bind(this)}/>
    );
  }
}
