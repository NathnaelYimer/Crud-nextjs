import axios from 'axios';
import React from 'react';
import DeleteItemButton from '../components/DeleteItemButton';

export default function DeleteItem() {
  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${itemId}`);
      // Redirect to the list of items page after deleting the item
      window.location.href = '/';
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Delete Item</h1>
      <DeleteItemButton onDelete={handleDeleteItem} />
    </div>
  );
}
