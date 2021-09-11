import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider as ReduxProvider } from "react-redux";
import IssueListComponent from "../../component/issues";
import NotFound from "../../component/common/not-found";

configure({ adapter: new Adapter() });

const mockStore = configureStore();

const renderState = (reduxStateOverrides) => {
  const store = mockStore({
    list: [],
    resultCount: 0,
    error: null,
    loading: false,
    ...reduxStateOverrides,
  });

  return mount(
    <ReduxProvider store={store}>
      <IssueListComponent />
    </ReduxProvider>,
  );
};

global.matchMedia = global.matchMedia || function () {
  return {
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};

describe('Component test', function () {
  it("not found", async () => {
    const tree = renderState({
      list: [],
    });
    expect(tree.find(NotFound)).toExist();
  });
});
