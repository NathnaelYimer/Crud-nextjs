import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../redux/actions';

const DeleteItemButton = ({ itemId, deleteItem }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItem(itemId);
    }
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
      Delete Item
    </button>
  );
};

export default connect(null, { deleteItem })(DeleteItemButton);
