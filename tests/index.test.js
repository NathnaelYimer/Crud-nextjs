// pages/index.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';

test('Index page renders correctly', () => {
  const { getByText } = render(<Index />);
  const title = getByText('Welcome to Next.js!');
  expect(title).toBeInTheDocument();
});
