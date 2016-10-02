import reducer from '../../app/scripts/reducers/countries.js';
import * as types from '../../app/scripts/constants/ActionTypes';

describe('countries reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual([])
    });

    it('should handle GET_COUNTRIES', () => {
        expect(
            reducer([], {
                type: types.COUNTRIES_LOADED,
                data: ['Run the tests']
            })
        ).toEqual(
            ['Run the tests']
        )

        expect(
            reducer(
                ['Use Redux'],
                {
                    type: types.COUNTRIES_LOADED,
                    data: ['Run the tests']
                }
            )
        ).toEqual(
            [
                'Run the tests'
            ]
        )
    });
});