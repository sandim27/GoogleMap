import { default as React, Component } from 'react';

export default class Description extends Component {

  renderDescription(details) {
    return (
        <div>
          <h2>Description of Country</h2>
          <ul className='list-group'>
            <li className='list-group-item' key={details.name}>Country - <b>{details.name}</b></li>
            <li className='list-group-item' key={details.region}>Region - <b>{details.region}</b></li>
            <li className='list-group-item' key={details.subregion}>Subregion - <b>{details.subregion}</b></li>
            <li className='list-group-item' key={details.area}>Area - <b>{details.area} km2</b></li>
            <li className='list-group-item' key={details.population}><b>Population - {details.population}</b></li>
            <li className='list-group-item' key={details.callingCodes}>Calling Code - +<b>{details.callingCodes}..</b></li>
            <li className='list-group-item' key={details.capital}>Capital - <b>{details.capital}</b></li>
           </ul>
        </div>
     );
  }

  render() {
    const {details} = this.props;
    return (
        <section className='description'>
          {details.name ? this.renderDescription(details) : null}
        </section>
    );
  }
};