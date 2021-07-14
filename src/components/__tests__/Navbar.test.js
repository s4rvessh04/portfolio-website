import React from 'react';
import { getAllByTestId, render, within } from '@testing-library/react';
import Navbar from '../Navbar';

test('Checks <Navbar /> content', () => {
  const { getByTestId, getAllByTestId } = render(<Navbar />);

  const navbar_icons = getByTestId(/navbar-icons/);
  const menuButton = getByTestId(/menuButton/);
  const themeToggleButton = getByTestId(/theme-toggler/);
  const countNavlinks = getByTestId(/navbar-navlinks/).childElementCount;

  expect(navbar_icons).toContainElement(menuButton);
  expect(navbar_icons).toContainElement(themeToggleButton);
  expect(countNavlinks).toBe(5);
});
