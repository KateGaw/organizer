import React from 'react'
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
          type="text"
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

const ListTitleInput = styled.input`
  font-size: 1.5rem;
  line-height: 1.75rem;
`

const TitleDetailsButton = styled.img<{ direction: string }>`
  margin-right: 1rem;
  transform: rotate(${(props) => (props.direction === 'true' ? '180' : '0')}deg);
  cursor: pointer;
`
