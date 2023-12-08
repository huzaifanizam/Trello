import React from 'react'
import { useDrag , useDrop } from 'react-dnd';

//drag 
const Card = ({ cardInfo ,  index, moveCard  }) => {
  const [{isDragging}, drag]= useDrag(() =>({
    type: 'CARD',
    item: { index },

    collect:(monitor)=>({
      isDragging: !!monitor.isDragging(),
    })
  })) ;
  const [, drop] = useDrop(() => ({
    accept: 'CARD',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  }));



  console.log('cardInfo:', cardInfo);
  return (
    <div ref={(node) => drag(drop(node))} className={`bg-gray-200 border-spacing-1 text-gray-400 p-2 mt-2 shadow-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light flex-shrink-0 ${isDragging ? 'dragging' : ''}`}> {cardInfo && cardInfo.title}</div>
  )
}

export default Card