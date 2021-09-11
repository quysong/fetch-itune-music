import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import IssueListPage from '../../page/issues';
import IssueListComponent from '../../component/issues';

configure({ adapter: new Adapter() });

describe('Page test', function () {
  it('page should render component', function() {
    const wrapper = shallow(<IssueListPage />);
    expect(wrapper.containsMatchingElement(<IssueListComponent />)).toEqual(true);
  });
});
