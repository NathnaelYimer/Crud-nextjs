// tests/actions.test.js
import { addItem, deleteItem, updateItem } from '../redux/actions';

test('addItem action creator', () => {
  const item = { id: 1, title: 'Test Item' };
  const action = addItem(item);
  expect(action).toEqual({
    type: 'ADD_ITEM',
    payload: item
  });
});

test('deleteItem action creator', () => {
  const itemId = 1;
  const action = deleteItem(itemId);
  expect(action).toEqual({
    type: 'DELETE_ITEM',
    payload: itemId
  });
});

test('updateItem action creator', () => {
  const item = { id: 1, title: 'Updated Test Item' };
  const action = updateItem(item);
  expect(action).toEqual({
    type: 'UPDATE_ITEM',
    payload: item
  });
});
