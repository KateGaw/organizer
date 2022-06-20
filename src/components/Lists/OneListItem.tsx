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

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import DetailsButton from './DetailsButton'
import ListTitleBlock from './ListTitle'
import SliderBlock from './Slider'
import Checkbox from '../Inputs/Checkbox'
import MainText from '../Typography/Main'

import getRandCode from '../Functions/createId'

import { DataProps, ItemBlockProps, ListTypes } from './types'

const OneItemBlock = ({
  item,
  value,
  setValue,
  details,
  editableTitle,
  slider,
  listId,
  checkbox,
  displayParent,
  listType = 'first',
  index,
  length,
}: ItemBlockProps) => {
  const childListType = listType === 'first' ? 'second' : 'third'
  const [checked, setChecked] = useState<string[]>([])
  const [displayDetails, setDisplayDetails] = useState(false)
  const [parents, setParents] = useState('')

  const simpleListOnChange = (e: any, id: string) => {
    setValue(value.map((i: any) => (i.id === id ? { ...i, title: e.target.value } : i)))
  }

  const checkboxOnChange = (e: any) => {
    if (!checked.includes(e.target.name)) {
      setChecked([...checked, e.target.name])
    } else {
      setChecked(checked.filter((i: string) => i !== e.target.name))
    }
  }

  useEffect(() => {
    if (displayParent && item.parents) {
      setParents(item.parents.join(' > '))
    }
  }, [displayParent, item])

  const addAction = (id: string) => {
    const newValue = [] as any
    value.map((i: DataProps) => {
      newValue.push(i)
      if (i.id === id) newValue.push({ id: getRandCode(5), title: '' })
      return i
    })
    setValue(newValue)
  }

  const onDeleteAction = (id: string) => {
    setValue(value.filter((i: any) => i.id !== id))
  }

  const top = (index: number, id: string) => {
    const item = value.find((i: DataProps) => i.id === id) as DataProps
    const newValue = [...value]
    newValue[index] = newValue[index - 1]
    newValue[index - 1] = item
    setValue(newValue)
  }

  const bottom = (index: number, id: string) => {
    const item = value.find((i: DataProps) => i.id === id) as DataProps
    const newValue = [...value]
    newValue[index] = newValue[index + 1]
    newValue[index + 1] = item
    setValue(newValue)
  }

  const [parentItem, setParentItem] = useState<DataProps[]>(item?.childs || [])
  useEffect(() => {
    setValue(value.map((i: any) => (i.id === item.id ? { ...i, childs: parentItem } : i)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parentItem])

  return (
    <Wrapper type={listType}>
      <ListItem>
        {/* Заголовок */}
        <ListTitleBlock
          item={item}
          details={details}
          editable={editableTitle}
          onChange={simpleListOnChange}
          displayDetails={displayDetails}
          setDisplayDetails={setDisplayDetails}
          listType={listType}
        />

        {/* Слайдер для ранжировки */}
        {slider && (
          <SliderBlock
            sliderId={`slider_${item.id}`}
            min={0}
            max={100}
            data={value}
            setData={setValue}
          />
        )}

        {/* Кнопка настроек (добавить, удалить, переместить) */}
        <DetailsButton
          listId={listId}
          dataId={item.id}
          funcs={{ delete: onDeleteAction, add: editableTitle ? addAction : null, top, bottom }}
          index={index}
          length={length}
        />

        {/* Для перемещения элементов списка */}
        {/* <DndComponent item={item} index={index} length={length} funcs={{ top, bottom }} /> */}

        {/* Чекбокс для выборки данных списка */}
        {checkbox && (
          <CheckboxWrapper>
            <Checkbox
              name={item.id}
              label=""
              checked={checked.includes(item.id)}
              onChange={checkboxOnChange}
            />
          </CheckboxWrapper>
        )}

        {/* Отображение записей о родительских заголовках */}
        {displayParent && <ParentsLine>{parents}</ParentsLine>}

        {/* Отображение текста деталей */}
        {displayDetails && (
          <DetailsBlock>
            <MainText title={item?.details || '[no details]'} />
          </DetailsBlock>
        )}

        {/* Для списков 2го и 3го уровней */}
        {item.childs &&
          item.childs.map((i: any, j: number) => (
            <OneItemBlock
              key={i.id}
              item={i}
              value={parentItem}
              setValue={setParentItem}
              details={details}
              editableTitle={editableTitle}
              slider={slider}
              listId={listId}
              checkbox={checkbox}
              displayParent={displayParent}
              listType={childListType}
              index={j}
              length={item?.childs?.length || 0}
            />
          ))}
      </ListItem>
    </Wrapper>
  )
}

export default OneItemBlock

const Wrapper = styled.div<{ type: ListTypes }>`
  display: flex;
  align-items: flex-start;
  width: 100%;

  ${(props) => {
    switch (props.type) {
      case 'first':
        return `padding-left: 0rem;`
      case 'second':
        return `padding-left: 1rem;`
      case 'third':
        return `padding-left: 2rem;`
      default:
        break
    }
  }}
`

const ListItem = styled.div`
  display: flex;
  align-items: center;
  flex-flow: wrap;
  width: 100%;
  margin: 0.625rem 0;
`

const CheckboxWrapper = styled.div`
  margin-left: 1rem;
`

const DetailsBlock = styled.div`
  width: 80%;
`

const ParentsLine = styled.div`
  max-width: 30rem;
  padding: 0.5rem 0 1rem 2rem;
  font-style: italic;
  color: var(--color-secondary);
`
