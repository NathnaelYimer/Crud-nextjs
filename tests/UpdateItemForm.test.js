// components/UpdateItemForm.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UpdateItemForm from './UpdateItemForm';

test('UpdateItemForm renders correctly', () => {
  const { getByPlaceholderText, getByRole } = render(<UpdateItemForm />);
  const input = getByPlaceholderText('Enter new title');
  const updateButton = getByRole('button', { name: 'Update Item' });
  expect(input).toBeInTheDocument();
  expect(updateButton).toBeInTheDocument();
});

test('UpdateItemForm updates item on button click', () => {
  const updateItemMock = jest.fn();
  const { getByPlaceholderText, getByRole } = render(<UpdateItemForm item={{ id: 1, title: 'Old Title' }} updateItem={updateItemMock} />);
  const input = getByPlaceholderText('Enter new title');
  const updateButton = getByRole('button', { name: 'Update Item' });
  fireEvent.change(input, { target: { value: 'New Title' } });
  fireEvent.click(updateButton);
  expect(updateItemMock).toHaveBeenCalledWith({ id: 1, title: 'New Title' });
});
