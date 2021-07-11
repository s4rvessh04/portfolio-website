import React from 'react';
import { render, within } from '@testing-library/react';
import About from '../about';

test('Checks rendering of <About />', () => {
  const { getByTestId } = render(<About />);

  const heroTextSection = getByTestId(/hero-text-section/);
  const heroHeader = within(heroTextSection).getByTestId(/hero-header/);
  const heroParagraph = within(heroTextSection).getByTestId(/hero-paragraph/);
  const descriptiveCard = getByTestId(/descriptive-card/);
  const cardContent = within(descriptiveCard).getByTestId(/card-content/);
  const cardButton = within(descriptiveCard).getByTestId(/card-button/);

  expect(heroTextSection).toBeInTheDocument();
  expect(heroHeader).toHaveTextContent(/About me/);
  expect(heroParagraph).not.toBeEmptyDOMElement();
  expect(cardContent).toBeInTheDocument();
  expect(cardButton).toBeInTheDocument();
});
