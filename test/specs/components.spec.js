import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Description from '../../app/scripts/components/Description';


describe('<Description/>', function () {
    const props = {
        details:{name:"country"}
    }

    const wrapper = shallow(<Description {...props}/>);

    it('should have props', function () {
        const wrapper = mount(<Description {...props}/>);
        expect(wrapper.prop('details').name).to.equal("country");
    });

    it('should have li tag ', function () {
        expect(wrapper.find('li')).to.have.length(7);
    });

    it('should have ul', function () {
        expect(wrapper.find('.list-group').type()).to.equal('ul');
    });

    it('should have "list-group" class for ul', function () {
        const wrapper = mount(<Description {...props}/>);
        expect(wrapper.find('ul').prop('className')).to.equal('list-group');
    });



});
