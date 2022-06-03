import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { TitleBlockProps, ListTypes } from './types'
import StepTitleText, { first, second, third } from '../Typography/StepTitle'

const ListTitleBlock = ({
  item,
  details,
  editable,
  onChange,
  displayDetails,
  setDisplayDetails,
  listType = 'first',
}: TitleBlockProps) => {
  const textareaRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px'
      const scrollHeight = textareaRef.current.scrollHeight
      textareaRef.current.style.height = scrollHeight + 'px'
    }
  }, [item.title])

  return (
    <ListTitleWrapper>
      {details && (
        <TitleDetailsButton
          direction={displayDetails.toString()}
          src="/images/icons/arrow.svg"
          onClick={() => setDisplayDetails(!displayDetails)}
        />
      )}

      {editable ? (
        <ListTitleInput
          // @ts-ignore
          ref={textareaRef}
          value={item.title}
          onChange={(e: any) => onChange(e, item.id)}
          type={listType}
        />
      ) : (
        <ListWrapper>
          <StepTitleText title={item.title} type={listType} />
        </ListWrapper>
      )}
    </ListTitleWrapper>
  )
}

export default ListTitleBlock

const ListWrapper = styled.div`
  width: 30rem;
  cursor: default;
`

const ListTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ListTitleInput = styled.textarea<{ type: ListTypes }>`
  width: 30rem;
  padding: 0.25rem;
  border: 0.5px solid black;
  border-radius: 0.25rem;
  background-color: transparent;
  resize: none;

  ${(props) => {
    switch (props.type) {
      case 'first':
        return first
      case 'second':
        return second
      case 'third':
        return third
      default:
        break
    }
  }}
`

const TitleDetailsButton = styled.img<{ direction: string }>`
  margin-right: 1rem;
  transform: rotate(${(props) => (props.direction === 'true' ? '180' : '0')}deg);
  cursor: pointer;
`
