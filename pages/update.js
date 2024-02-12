import axios from 'axios';
import React from 'react';
import UpdateItemForm from '../components/UpdateItemForm';

export default function UpdateItem() {
  const handleUpdateItem = async (item) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${item.id}`, {
        title: item.title
      });
      // Redirect to the list of items page after updating the item
      window.location.href = '/';
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Update Item</h1>
      <UpdateItemForm onUpdate={handleUpdateItem} />
    </div>
  );
}
