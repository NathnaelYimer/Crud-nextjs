// components/AddItemForm.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddItemForm from './AddItemForm';

test('AddItemForm renders correctly', () => {
  const { getByPlaceholderText, getByRole } = render(<AddItemForm />);
  const input = getByPlaceholderText('Enter item title');
  const addButton = getByRole('button', { name: 'Add Item' });
  expect(input).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test('AddItemForm adds item on button click', () => {
  const addItemMock = jest.fn();
  const { getByPlaceholderText, getByRole } = render(<AddItemForm addItem={addItemMock} />);
  const input = getByPlaceholderText('Enter item title');
  const addButton = getByRole('button', { name: 'Add Item' });
  fireEvent.change(input, { target: { value: 'New Item' } });
  fireEvent.click(addButton);
  expect(addItemMock).toHaveBeenCalledWith({ title: 'New Item' });
});
