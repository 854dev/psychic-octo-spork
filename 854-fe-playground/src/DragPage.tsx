import React , { useRef, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { useDrag, useDrop } from 'react-dnd';

function DragPage() {
    /**
     * constant
     */
    const ITEM_TYPE_SORTABLE_LIST = "SORTABLE_LIST"
    const listItem_INIT = [
        {id:'00', name:"00번아이템"},
        {id:'01', name:"01번아이템"},
        {id:'02', name:"02번아이템"},
        {id:'03', name:"03번아이템"},
        {id:'04', name:"04번아이템"},
        {id:'05', name:"05번아이템"},
        {id:'06', name:"06번아이템"},
        {id:'07', name:"07번아이템"},
        {id:'08', name:"08번아이템"},
        {id:'09', name:"09번아이템"},
        {id:'10', name:"10번아이템"},
        {id:'11', name:"11번아이템"},
    ]

    /**
     * functions
     */
    // 배열 순서바꾸기
    function arraymove(arr:any[], containerId : string, itemId:string ) {
        // 배열 아이템 인덱스 찾기
        // 넣을 위치
        const containerIdx = arr.findIndex((elem)=>{return elem.id === containerId})
        // 뺄 항목 위치
        const itemIdx= arr.findIndex((elem)=>{return elem.id === itemId}) 
        console.log(containerIdx)
        console.log(itemIdx)
        
        if (itemIdx === containerIdx || itemIdx - containerIdx === 1) {return;}
        var element = arr[itemIdx];
        arr.splice(containerIdx, 1);
        arr.splice(itemIdx, 0, element);
        console.log("result",arr)
        return arr;
    }
        
    /**
     * state
     */
    const [listItem, setListItem] = useState<{id:string, name:string}[]>(listItem_INIT)

    /**
     * 로컬 컴포넌트
     */
    const DragContainer = (props:any) => {
        const {id} = props;
        const [collectedProps, dropSourceRef] = useDrop(() => ({
            accept: ITEM_TYPE_SORTABLE_LIST,
            drop: (item:{id:string},monitor) => {
                console.log(item,id);
                const result = arraymove(listItem,item.id, id)
                if (result) {
                    setListItem([...result])
                }
            },
            collect:(monitor) => ({
                isOver: !!monitor.isOver()
            }),
            // hover:(item,monitor)=>console.log(item,monitor),
          })
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
                {listItem.map((elem, idx)=>{
                    return (
                        <React.Fragment key={elem.id}>
                            <DragContainer id={elem.id} />
                            <DragItem id={elem.id}/>
                        </React.Fragment>        
                    )
                })}
                <DragContainer id={listItem.length} />
            </DndProvider>

        </div>
    </>
  )
}

export default DragPage