import { MyDiv } from './App';

describe('Test Component using hooks', () => {
  test('MyDiv', () => {
    const div = MyDiv();
    expect(div).toMatchSnapshot();
  })

});
