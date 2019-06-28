import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

// console.log('logging Card');
// console.log(shallow(<CardList />));

it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'test',
      username: 'test',
      email: 'test@test.com'
    }
  ]

  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});