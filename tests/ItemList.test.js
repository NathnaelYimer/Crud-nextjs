// tests/components/ItemList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ItemList from '../components/ItemList';

test('ItemList renders correctly', () => {
  const items = [{ id: 1, title: 'Test Item 1' }, { id: 2, title: 'Test Item 2' }];
  const { getByText } = render(
    <Provider store={store}>
      <ItemList items={items} />
    </Provider>
  );
  const item1 = getByText('Test Item 1');
  const item2 = getByText('Test Item 2');
  expect(item1).toBeInTheDocument();
  expect(item2).toBeInTheDocument();
});
