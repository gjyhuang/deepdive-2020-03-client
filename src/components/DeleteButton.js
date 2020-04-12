import React from 'react';
import axios from 'axios';

const DeleteButton = ({itemId, itemType, history}) => {
  // console.log(itemId, itemType, history)
  const deleteItem = async () => {
    await axios.delete(`/api/${itemType}/${itemId}`);
    history.push(`/${itemType}`)
  }

  return (
    <div className="button--delete"
      onClick={deleteItem}
    >
      X
    </div>
  )
}

export default DeleteButton;
