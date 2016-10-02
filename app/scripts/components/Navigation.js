import React from 'react';

import { Nav, NavItem} from 'react-bootstrap';
import { LinkContainer,IndexLinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
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
};

export default Navigation;
