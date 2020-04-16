import React from 'react';
import { shallow } from 'enzyme';
import Box2 from './Box2';

describe('<Box2 />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Box2 />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
