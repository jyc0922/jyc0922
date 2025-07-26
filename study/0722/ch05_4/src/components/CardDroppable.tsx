import type {FC, PropsWithChildren} from 'react'
import {Draggable, Droppable} from 'react-beautiful-dnd'

export type CardDroppableProps = {
    droppableId: string
}
export const CardDroppable: FC<PropsWithChildren<CardDroppableProps>> = ({
    droppableId,
    children
}) => {
    return (
        <Droppable droppableId={droppableId}>
            {provided => (
                <div className='flex flex-col p-2' ref={provided.innerRef} {...provided.droppableProps}>
                    {children}
                    {provided.placeholder}
                </div> 
    )}              
        </Droppable>
    )  
}