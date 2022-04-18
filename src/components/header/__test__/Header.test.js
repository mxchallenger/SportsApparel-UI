import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { createMemoryHistory } from 'history';
// import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
// import { LocationDisplay } from './..app';
import Header from '../Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(Header, div);
});

it('renders link correctly', () => {
  const { getByDivId } = render(<Header label='img src={logo} alt="logo"' />);
  expect(getByDivId('home')).toHaveTextContent('img src={logo} alt="logo"');
});

/* test('rendering a component that uses useLocation', () => {
  const history = createMemoryHistory();
  const route = 'App';
  history.push(route);
  render(
    <Router history={history}>
      <LocationDisplay />
    </Router>
  );

  expect(screen.getByDivId('App')).toHaveTextContent(route);
}); */
