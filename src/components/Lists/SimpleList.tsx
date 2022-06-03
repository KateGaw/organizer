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
import SliderSortBlock from './SliderSortBlock'
import Checkbox from '../Inputs/Checkbox'
import MainText from '../Typography/Main'

import { DataProps, Props, ItemBlockProps } from './types'

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
}: ItemBlockProps) => {
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

  return (
    <ListItem>
      <ListTitleBlock
        item={item}
        details={details}
        editable={editableTitle}
        onChange={simpleListOnChange}
        displayDetails={displayDetails}
        setDisplayDetails={setDisplayDetails}
      />

      {slider && (
        <SliderBlock
          sliderId={`slider_${item.id}`}
          min={0}
          max={100}
          data={value}
          setData={setValue}
        />
      )}

      <DetailsButton listId={listId} dataId={item.id} />

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

      {displayDetails && (
        <DetailsBlock>
          <MainText title={item?.details || '[no details]'} />
        </DetailsBlock>
      )}

      {displayParent && <ParentsLine>{parents}</ParentsLine>}
    </ListItem>
  )
}

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

  return (
    <div>
      {sort && <SliderSortBlock onChange={updateSort} />}
      <List id={listId}>
        {value &&
          value.map((item: DataProps) => (
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
