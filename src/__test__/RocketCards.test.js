import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configurestore';
import RocketCards from '../components/RocketCards';

it('Renders Rockets component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <RocketCards />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
