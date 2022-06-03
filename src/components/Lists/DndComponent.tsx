import React from 'react'
import styled from 'styled-components'

import { DataProps } from './types'

type InputTypes = {
  item: DataProps
  funcs: {
    dragStartHandler: (e: any, item: DataProps) => void
    dropHandler: (e: any, item: DataProps) => void
  }
}

const DndComponent = ({ funcs, item }: InputTypes) => {
  return (
    <Wrapper
      draggable={true}
      onDragStart={(e: any) => funcs.dragStartHandler(e, item)}
      onDragOver={(e: any) => e.preventDefault()}
      onDrop={(e: any) => funcs.dropHandler(e, item)}
    >
      <img src="/images/icons/dnd.svg" title="Переместить" alt="Переместить" />
    </Wrapper>
  )
}

export default DndComponent

const Wrapper = styled.div`
  height: 100%;
  padding-top: 1rem;
  padding-right: 1rem;

  img {
    height: 1.5rem;
    cursor: grabbing;
  }
`
