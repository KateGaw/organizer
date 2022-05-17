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

import DetailsButton from './DetailsButton'
import SliderBlock from './Slider'
import SliderSortBlock from './SliderSortBlock'
import Checkbox from '../Inputs/Checkbox'

type DataProps = {
  id: string
  title: string
  slider?: number
}

type Props = {
  listId: string
  data: DataProps[]
  editableTitle?: boolean
  slider?: boolean
  sort?: boolean
  checkbox?: boolean
}

const SimpleList = ({
  listId,
  data,
  editableTitle = false,
  slider = false,
  sort = false,
  checkbox = false,
}: Props) => {
  const [value, setValue] = useState<DataProps[]>(data)
  const [checked, setChecked] = useState<string[]>([])

  const simpleListOnChange = (e: any, id: string) => {
    const currentValue = value.find((i: any) => i.id === id) as DataProps
    currentValue.title = e.target.value
    setValue([...value.filter((i: any) => i.id !== id), currentValue])
  }

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

  const checkboxOnChange = (e: any) => {
    if (!checked.includes(e.target.name)) {
      setChecked([...checked, e.target.name])
    } else {
      setChecked(checked.filter((i: string) => i !== e.target.name))
    }
  }

  return (
    <div>
      {sort && <SliderSortBlock onChange={updateSort} />}
      <List id={listId}>
        {value &&
          value.map((item: DataProps) => (
            <ListItem key={item.id}>
              {editableTitle ? (
                <ListTitleInput
                  type="text"
                  value={item.title}
                  onChange={(e: any) => simpleListOnChange(e, item.id)}
                />
              ) : (
                <ListTitle>{item.title}</ListTitle>
              )}

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
            </ListItem>
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
  width: 100%;
  margin: 0.625rem 0;
`

const ListTitle = styled.div`
  font-size: 1.5rem;
  line-height: 1.75rem;
  cursor: default;
`

const ListTitleInput = styled.input`
  font-size: 1.5rem;
  line-height: 1.75rem;
`

const CheckboxWrapper = styled.div`
  margin-left: 1rem;
`
