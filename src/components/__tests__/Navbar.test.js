import React from 'react';
import { render, within } from '@testing-library/react';
import Navbar from '../Navbar';

test('Checks <Navbar /> content', () => {
  const { getByTestId } = render(<Navbar />);

  const navbar_icons = getByTestId(/navbar-icons/);
  const menuButton = getByTestId(/menuButton/);
  const countNavlinks = getByTestId(/navbar-navlinks/).childElementCount;
  const countNavIcons = navbar_icons.childElementCount;

  expect(navbar_icons).toContainElement(menuButton);
  expect(countNavIcons).toBe(2);
  expect(countNavlinks).toBe(5);
});
