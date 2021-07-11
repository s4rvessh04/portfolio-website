import React from 'react';
import { render, waitFor, within } from '@testing-library/react';
import Project from '../projects';

test('Checks rendering of <Projects />', async () => {
  const { getByTestId } = render(<Project />);

  await waitFor(() => {
    const projectsGrid = getByTestId(/projects-grid/);
    const projectDetailsCard = getByTestId(/project-details-card/);
    const languageBar = within(projectDetailsCard).getByTestId(/language-bar/);
    const buttonGrid = within(projectDetailsCard).getByTestId(/button-grid/);
    expect(projectsGrid).toBeInTheDocument();
    expect(projectDetailsCard).toBeInTheDocument();
    expect(languageBar).toBeInTheDocument();
    expect(buttonGrid.childElementCount).toBe(2);
  });
});
