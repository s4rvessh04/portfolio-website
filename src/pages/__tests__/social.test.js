import React from 'react';
import { render, within } from '@testing-library/react';
import Social from '../social';

test('Checks rendering of <Social />', () => {
  const { getByTestId } = render(<Social />);

  const socialCards = getByTestId(/social-cards/);
  const countSocialCards = socialCards.childElementCount;
  const contactForm = getByTestId(/contact-form/);
  const countContactFields = contactForm.childElementCount;
  const headerContactForm = within(contactForm).getByTestId('form-header');
  const nameField = within(contactForm).getByPlaceholderText(/Name/);
  const emailField = within(contactForm).getByPlaceholderText(/Email/);
  const detailsField = within(contactForm).getByPlaceholderText(/Content/);

  expect(socialCards).toBeInTheDocument();
  expect(countSocialCards).toBe(4);
  expect(contactForm).toBeInTheDocument();
  expect(countContactFields).toBe(5);
  expect(headerContactForm).toHaveTextContent(/Contact Form/);
  expect(nameField).toBeInTheDocument();
  expect(emailField).toBeInTheDocument();
  expect(detailsField).toBeInTheDocument();
});
