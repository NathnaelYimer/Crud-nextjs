import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../redux/actions';

const UpdateItemForm = ({ item, updateItem }) => {
  const [title, setTitle] = useState(item.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    updateItem({ ...item, title });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter new title"
        className="mr-2 px-4 py-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Update Item
      </button>
    </form>
  );
};

export default connect(null, { updateItem })(UpdateItemForm);
