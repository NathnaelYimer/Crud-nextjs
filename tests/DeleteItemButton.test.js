// components/DeleteItemButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DeleteItemButton from './DeleteItemButton';

test('DeleteItemButton renders correctly', () => {
  const { getByRole } = render(<DeleteItemButton />);
  const deleteButton = getByRole('button', { name: 'Delete Item' });
  expect(deleteButton).toBeInTheDocument();
});

test('DeleteItemButton calls delete function on click', () => {
  const deleteItemMock = jest.fn();
  const { getByRole } = render(<DeleteItemButton deleteItem={deleteItemMock} />);
  const deleteButton = getByRole('button', { name: 'Delete Item' });
  fireEvent.click(deleteButton);
  expect(deleteItemMock).toHaveBeenCalled();
});
