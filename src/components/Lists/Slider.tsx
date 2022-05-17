import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

type Props = {
  sliderId: string
  min: number
  max: number
  data: any
  setData: any
}

const SliderBlock = ({ sliderId, min, max, data, setData }: Props) => {
  const [value, setValue] = useState(50)

  const onCurrentChange = (e: any) => {
    setValue(parseInt(e.target.value))
  }

  const onSliderChange = (value: any) => {
    setValue(value)
  }

  useEffect(() => {
    const currentIndex = data.findIndex((i: any) => i.id === sliderId.split('_').pop())

    if (currentIndex !== -1) {
      const newData = data
      newData[currentIndex].slider = value
      setData(newData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <Wrapper id={sliderId}>
      <Slider
        min={min}
        max={max}
        value={value}
        onChange={onSliderChange}
        trackStyle={{ backgroundColor: 'inherit', cursor: 'pointer' }}
        handleStyle={{
          height: 16,
          width: 16,
          borderColor: 'var(--color-black)',
          backgroundColor: 'var(--color-primary)',
          cursor: 'pointer',
        }}
      />
      <Input type="number" value={value} onChange={onCurrentChange} />
    </Wrapper>
  )
}

export default SliderBlock

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 25rem;
  margin: 3rem 2rem;
`

const Input = styled.input`
  width: 2rem;
  margin-left: 1rem;
  border: 1px solid var(--color-black);
  border-radius: 0.5rem;
  padding: 0.25rem;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;

  -moz-appearance: textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
