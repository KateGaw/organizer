import React, { useState } from 'react'
import RadioButton from '../Inputs/RadioButton'

type SortTypes = 'no' | 'desc' | 'asc'

const SliderSortBlock = ({ onChange }: any) => {
  const [activeSort, setActiveSort] = useState<SortTypes>('no')

  const onSortHandle = (type: SortTypes) => {
    setActiveSort(type)
    onChange(type)
  }

  return (
    <div>
      <RadioButton
        name="desc"
        label="По убывающей"
        checked={activeSort === 'desc'}
        onChange={() => onSortHandle('desc')}
      />
      <RadioButton
        name="asc"
        label="По возрастающей"
        checked={activeSort === 'asc'}
        onChange={() => onSortHandle('asc')}
      />
      <RadioButton
        name="no"
        label="Без сортировки"
        checked={activeSort === 'no'}
        onChange={() => onSortHandle('no')}
      />
    </div>
  )
}

export default SliderSortBlock
