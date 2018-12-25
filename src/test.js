import { MyDiv } from './App';
import renderer from 'react-test-renderer'
import React from 'react'

describe('Test Component using hooks', () => {
  test('MyDiv', () => {
    const div = renderer.create(<MyDiv/>).toJSON();
    expect(div).toMatchSnapshot();
  })

});
