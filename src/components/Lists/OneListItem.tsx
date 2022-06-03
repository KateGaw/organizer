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

import { DataProps, ItemBlockProps } from './types'

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

      <DetailsButton
        listId={listId}
        dataId={item.id}
        funcs={{ delete: onDeleteAction, add: addAction }}
      />

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

export default OneItemBlock


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
