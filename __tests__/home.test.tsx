/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders a main element', () => {
    render(<Home />);
    const main = screen.getByRole('main');
    expect(main).toBeTruthy();
  });
});