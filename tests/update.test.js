// pages/update.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Update from './update';

test('Update page renders correctly', () => {
  const { getByText } = render(<Update />);
  const title = getByText('Update Item');
  expect(title).toBeInTheDocument();
});
