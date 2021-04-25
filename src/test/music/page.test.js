import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import MusicListPage from '../../page/music-list';
import MusicListComponent from '../../component/music-list';

configure({ adapter: new Adapter() });

describe('Page test', function () {
  it('page should render component', function() {
    const wrapper = shallow(<MusicListPage />);
    expect(wrapper.containsMatchingElement(<MusicListComponent />)).toEqual(true);
  });
});
