import React from 'react';
import { render, within, act } from '@testing-library/react';
import Project from '../projects';

test('Checks rendering of <Projects />', () => {
  const { getByTestId } = render(<Project />);

  const loader = getByTestId(/loader/);
  expect(loader).toBeInTheDocument();

  // const projectsGrid = queryByTestId(/projects-grid/);
  // const projectDetailsCard = getByTestId(/project-details-card/);
  // const languageBar = within(projectDetailsCard).getByTestId(/language-bar/);
  // const buttonGrid = within(projectDetailsCard).getByTestId(/button-grid/);
  // expect(projectsGrid).toBeChecked();
  // expect(projectDetailsCard).toBeInTheDocument();
  // expect(languageBar).toBeInTheDocument();
  // expect(buttonGrid.childElementCount).toBe(2);
});
