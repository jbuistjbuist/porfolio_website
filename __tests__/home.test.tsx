/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it ('one plus one is two', () => {
    expect(1 + 1).toBe(2);
  })
});