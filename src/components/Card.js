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
    <div ref={(node) => drag(drop(node))} className={`bg-white p-2 mt-2 shadow-md rounded-md flex-shrink-0 ${isDragging ? 'dragging' : ''}`}> {cardInfo && cardInfo.title}</div>
  )
}

export default Card