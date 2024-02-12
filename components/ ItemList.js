import React from 'react';
import { connect } from 'react-redux';

const ItemList = ({ items }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Items</h2>
      <ul className="list-disc pl-4">
        {Array.isArray(items) && items.map(item => (
          <li key={item.id} className="mb-2">{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items // Assuming 'items' is stored in Redux state
});

export default connect(mapStateToProps)(ItemList);
