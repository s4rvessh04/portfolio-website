import React from 'react';
import { render } from '@testing-library/react';
import Home from '../index';

test('Testing render for index page', () => {
  const { getByTestId } = render(<Home />);

  expect(getByTestId(/main/)).toBeInTheDocument();
  expect(getByTestId(/hero-text/)).toHaveTextContent(/Hi there,/);
  expect(getByTestId(/hero-image/)).toBeInTheDocument();
  expect(getByTestId(/action-button/)).toHaveTextContent(/Let's Connect/);
});
