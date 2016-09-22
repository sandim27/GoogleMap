import {getIssues} from '../api';

export function loadCountries() {
  return {
    type: 'PROMISE',
    actions: ['ISSUES_LOADING', 'ISSUES_LOADED', 'ISSUES_LOAD_FAILURE'],
    promise: getIssues()
  };
};
