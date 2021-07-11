import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../Layout';

jest.mock('../Navbar', () => () => <div data-testid="Navbar" />);
jest.mock('../Footer', () => () => <div data-testid="Footer" />);

test('Checks rendering of <Layout />', () => {
  const { getByTestId } = render(<Layout />);

  expect(getByTestId(/Navbar/)).toBeInTheDocument();
  expect(getByTestId(/Children/)).toBeInTheDocument();
  expect(getByTestId(/Footer/)).toBeInTheDocument();
});
