import axios from 'axios';
import React from 'react';
import AddItemForm from '../components/AddItemForm';

export default function AddItem() {
  const handleAddItem = async (title) => {
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title
      });
      // Redirect to the list of items page after adding the item
      window.location.href = '/';
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Add New Item</h1>
      <AddItemForm onAddItem={handleAddItem} />
    </div>
  );
}
