import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
// import { render /* screen */ } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(Header, div);
});

/* it('renders link correctly', () => {
  const { getByAltText } = render(<Header label='img src={logo} alt="logo"' />);
  expect(getByAltText('img src={logo} alt="logo"')).toHaveTextContent('img src={logo} alt="logo"');
}); */

/* test('rendering a component that uses useLocation', () => {
  const history = createMemoryHistory();
  const route = './App';
  const cart = screen.getByAltText('cart');
  history.push(route);
  render(
    <Router history={history}>
      <BrowserRouter />
    </Router>
  );

  expect(screen.getByAltText(cart)).toHaveTextContent(route);
}); */
test('renders checkout page when cart icon is clicked', () => {
  <Router>
    render(
    <NavLink to="/checkout" />
    );
    const linkElement = screen.getAllByAltText(cart);
    expect(linkElement).toBeInTheDocument();
  </Router>;
});

test('renders home page when logo is clicked', () => {
  <Router>
    render(
    <NavLink to="/" />
    );
    const linkElement = screen.getAllByAltText(logo);
    expect(linkElement).toBeInTheDocument();
  </Router>;
});
