import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    searchField: '',
    robots: [],
    isPending: false
  }
  wrapper = shallow(<MainPage { ...mockProps } />)
})


it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly and returns a populated list', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    searchField: 'test',
    robots: [{
      id: 3,
      name: 'test',
      email: 'test@test.com'
    }],
    isPending: false
  }
  const wrapper2 = shallow(<MainPage { ...mockProps2 } />)
  expect(wrapper2.instance().filterRobots()).toEqual(mockProps2.robots);
});

it('filters robots correctly and returns an empty list', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    searchField: 'a',
    robots: [{
      id: 3,
      name: 'test',
      email: 'test@test.com'
    }],
    isPending: false
  }
  let emptyArray = [];
  const wrapper3 = shallow(<MainPage { ...mockProps3 } />)
  expect(wrapper3.instance().filterRobots()).toEqual(emptyArray);
});