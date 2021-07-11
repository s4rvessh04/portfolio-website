import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

test('Checks year in <Footer /> text', () => {
  const { getByTestId } = render(<Footer />);

  expect(getByTestId(/footer-text/)).toHaveTextContent('in 2021');
});
