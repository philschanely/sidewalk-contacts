import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hello world text', () => {
  const { getByText } = render(<App />);
  const greeting = getByText("Hello, world!");
  expect(greeting).toBeInTheDocument();
});
