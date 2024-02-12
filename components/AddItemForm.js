import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions';

const AddItemForm = ({ addItem }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addItem({ id: Math.random(), title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter item title"
        className="mr-2 px-4 py-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Item
      </button>
    </form>
  );
};

export default connect(null, { addItem })(AddItemForm);
