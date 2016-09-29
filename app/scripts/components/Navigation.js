import {default as React,Component} from 'react';

import { Nav, NavItem} from 'react-bootstrap';
import { LinkContainer,IndexLinkContainer } from 'react-router-bootstrap';

export default class Navigation extends Component {
  render() {
    return (
        <Nav bsStyle="pills">
            <IndexLinkContainer to="/">
                <NavItem eventKey={1}>Show description of Country</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/map">
                <NavItem eventKey={2}>Show map of Country</NavItem>
            </LinkContainer>
        </Nav>
    );
  }
}
