// pages/delete.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Delete from './delete';

test('Delete page renders correctly', () => {
  const { getByText } = render(<Delete />);
  const title = getByText('Delete Item');
  expect(title).toBeInTheDocument();
});
