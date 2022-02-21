import React , { useRef } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { useDrag, useDrop } from 'react-dnd';

function DragPage() {
    /**
     * constant
     */
    const ITEM_TYPE_SORTABLE_LIST = "SORTABLE_LIST"

    /**
     * 로컬 컴포넌트
     */
    const DragContainer = (props:any) => {
        const {id} = props;
        const [collectedProps, dropSourceRef] = useDrop(() => ({
            accept: ITEM_TYPE_SORTABLE_LIST,
            drop: (item,monitor) => console.log(item,monitor),
            collect:(monitor) => ({
                isOver: !!monitor.isOver()
            }),
            // hover:(item,monitor)=>console.log(item,monitor),
          }),
        )
          
        return <div ref={dropSourceRef} className={`transition-all ease-out m-3 ${collectedProps.isOver? 'bg-blue-300 px-16' : "bg-orange-400 px-1"} border border-4 border-gray-400`}>
            드롭영역{id}
        </div>
    }
    const DragItem = (props:any) => {
        const {id} = props;
        const [collectedProps, dragSourceRef, dragPreviewRef] = useDrag(() => ({
            type:ITEM_TYPE_SORTABLE_LIST,
            item:{id},
            collect: monitor => ({
                isDragging: !!monitor.isDragging(),
              }),
            }))
          
        return <div ref={dragSourceRef} className='p-6 m-3 bg-teal-300 border border-4 border-gray-400'>
            리스트 드래그 {id}
        </div>
    }


  return (
      <>
        <div className='flex justify-center'>
            <h1>드래그 테스트 페이지</h1>
            <DndProvider backend={HTML5Backend}>
                <DragContainer id="a" />
                <DragItem id="1"/>
                <DragContainer id="b" />
                <DragItem id="2"/>
                <DragContainer id="c" />
                <DragItem id="3"/>
                <DragContainer id="d" />
                <DragItem id="4"/>
                <DragContainer id="e" />
            </DndProvider>

        </div>
    </>
  )
}

export default DragPage