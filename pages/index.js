import axios from 'axios';
import React from 'react';
import ItemList from '../components/ ItemList';

export default function Home({ items }) {
  console.log("Items received:", items); // Log received items

  // Check if items is an array before using map
  if (!Array.isArray(items)) {
    console.error("Items is not an array:", items);
    items = []; // Set items to an empty array to avoid further errors
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">List of Items</h1>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const items = response.data;
    console.log("Response data:", items); // Log response data
    return {
      props: {
        items
      }
    };
  } catch (error) {
    console.error('Error fetching items:', error);
    return {
      props: {
        items: []
      }
    };
  }
}
