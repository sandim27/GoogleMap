import * as actions from '../../app/scripts/actions';
import * as types from '../../app/scripts/constants/ActionTypes';

describe('Actions',  function () {
    it('should create an action to get details',  function () {
        const details = 'action'
        const expectedAction = {
            type: types.GET_DETAILS,
            data:details
        }
        expect(actions.getDetails(details)).toEqual(expectedAction)
    })
})

