// pages/add.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Add from './add';

test('Add page renders correctly', () => {
  const { getByText } = render(<Add />);
  const title = getByText('Add Item');
  expect(title).toBeInTheDocument();
});
