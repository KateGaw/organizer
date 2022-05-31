import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { TitleBlockProps } from './types'

const ListTitleBlock = ({
  item,
  details,
  editable,
  onChange,
  displayDetails,
  setDisplayDetails,
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
        />
      ) : (
        <ListTitle>{item.title}</ListTitle>
      )}
    </ListTitleWrapper>
  )
}

export default ListTitleBlock

const ListTitle = styled.div`
  font-size: 1.5rem;
  line-height: 1.75rem;
  cursor: default;
`

const ListTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ListTitleInput = styled.textarea`
  width: 30rem;
  padding: 0.25rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  border: 0.5px solid black;
  border-radius: 0.25rem;
  background-color: transparent;
  resize: none;
`

const TitleDetailsButton = styled.img<{ direction: string }>`
  margin-right: 1rem;
  transform: rotate(${(props) => (props.direction === 'true' ? '180' : '0')}deg);
  cursor: pointer;
`
