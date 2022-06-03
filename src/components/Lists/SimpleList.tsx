/**
 * Простой список первого уровня
 *
 * Поля:
 *  - заголовок (опционально - редактируемый)
 *  - "детали"
 *  - шкала (опционально)
 *  - сортировка (опционально)
 *  - чекбоксы (опционально)
 */

import React, { useState } from 'react'
import styled from 'styled-components'

import SliderSortBlock from './SliderSortBlock'
import OneItemBlock from './OneListItem'

import { DataProps, Props } from './types'

const SimpleList = ({
  listId,
  data,
  editableTitle = false,
  slider = false,
  sort = false,
  checkbox = false,
  details = false,
  displayParent = false,
}: Props) => {
  const [value, setValue] = useState<DataProps[]>(data)

  const updateSort = (type: string) => {
    const output = [] as any
    switch (type) {
      case 'asc':
        const asc = value.sort((a: any, b: any) => b.slider - a.slider)
        output.push(...asc)
        break
      case 'desc':
        const desc = value.sort((a: any, b: any) => a.slider - b.slider)
        output.push(...desc)
        break
      case 'no':
        const no = data.sort((a: any, b: any) => a.id - b.id)
        output.push(...no)
        break
      default:
        output.push(...data)
        break
    }

    setValue(output)
  }

  /************************** TASKS DnD **************************/
  const [curr, setCurr] = useState<null | any>(null)
  const dragStartHandler = (_e: any, card: any) => {
    setCurr(card)
  }
  const dropHandler = (e: any, card: any) => {
    e.preventDefault()
    const newVars = [] as DataProps[]
    value.map((i: DataProps) => {
      if (i === card && curr !== null) newVars.push(curr)
      if (i !== curr) newVars.push(i)
      return i
    })
    setValue(newVars)
  }
  /*****************************************************************/

  return (
    <div>
      {sort && <SliderSortBlock onChange={updateSort} />}
      <List id={listId}>
        {value &&
          value.map((item: DataProps) => (
            <Wrapper>
              <DndComponent
                draggable={true}
                onDragStart={(e: any) => dragStartHandler(e, item)}
                onDragOver={(e: any) => e.preventDefault()}
                onDrop={(e: any) => dropHandler(e, item)}
              >
                <img src="/images/icons/dnd.svg" title="Переместить" alt="Переместить" />
              </DndComponent>
              <OneItemBlock
                key={item.id}
                item={item}
                value={value}
                setValue={setValue}
                details={details}
                editableTitle={editableTitle}
                slider={slider}
                listId={listId}
                checkbox={checkbox}
                displayParent={displayParent}
              />
            </Wrapper>
          ))}
      </List>
    </div>
  )
}

export default SimpleList

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

const DndComponent = styled.div`
  height: 100%;
  padding-top: 1.25rem;
  padding-right: 1rem;

  img {
    height: 2rem;
    cursor: grabbing;
  }
`
