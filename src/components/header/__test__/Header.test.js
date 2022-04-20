import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
// import { Header } from './..app';
import Header from '../Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(Header, div);
});

/* it('renders link correctly', () => {
  const { getByAltText } = render(<Header label='img src={logo} alt="logo"' />);
  expect(getByAltText('img src={logo} alt="logo"')).toHaveTextContent('img src={logo} alt="logo"');
}); */

test('rendering a component that uses useLocation', () => {
  const history = createMemoryHistory();
  const route = 'Header';
  const logo = screen.getByAltText('logo');
  history.push(route);
  render(
    <Router history={history}>
      <Header />
    </Router>
  );

  expect(screen.getByAltText(logo)).toHaveTextContent(route);
});
