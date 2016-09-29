import { default as React, Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class Autocomplete extends Component {
  render() {
    return (
        <Select ref="stateSelect" labelKey='name' placeholder={this.props.details.name} options={this.props.countries} onChange={this.props.getDetails}/>
    );
  }
}
