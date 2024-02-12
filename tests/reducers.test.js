// tests/reducers.test.js
import rootReducer from '../redux/reducers';

test('reducers', () => {
  let state;
  state = rootReducer(undefined, {});
  expect(state).toEqual({ items: [] });

  const item = { id: 1, title: 'Test Item' };
  state = rootReducer(state, { type: 'ADD_ITEM', payload: item });
  expect(state).toEqual({ items: [item] });

  state = rootReducer(state, { type: 'DELETE_ITEM', payload: 1 });
  expect(state).toEqual({ items: [] });

  const updatedItem = { id: 1, title: 'Updated Test Item' };
  state = rootReducer(state, { type: 'UPDATE_ITEM', payload: updatedItem });
  expect(state).toEqual({ items: [updatedItem] });
});
