/**
 * Компонент "Детали сессии"
 *
 *  - название сессии,
 *  - описание сессии,
 *  - дата создания сессии (milliseconds),
 *  - дата последнего изменения сессии (milliseconds)
 *
 */

import React from 'react'
import styled from 'styled-components'

import SessionNameText from '../Typography/SessionName'
import SessionDescriptionText from '../Typography/SessionDescription'
import MainText from '../Typography/Main'
import Button from '../Buttons/index'

import dayjs from 'dayjs'

type Props = {
  title: string
  description: string
  createdAt: number
  updatedAt: number
}

const DetailsSesson = ({ title, description, createdAt, updatedAt }: Props) => {
  return (
    <Details>
      <SessionNameText title={title} />
      <SessionDescriptionText title={description} />
      <DataDiv>
        <div>
          <MainText title="Дата создания:&nbsp;" styles="font-weight: 600;" />
          <MainText title={dayjs(createdAt).format('DD.MM.YY, HH:mm')} />
        </div>
        <div>
          <MainText title="Дата обновления:&nbsp;" styles="font-weight: 600;" />
          <MainText title={dayjs(updatedAt).format('DD.MM.YY, HH:mm')} />
        </div>
      </DataDiv>
      <ButtonsDiv>
        <Button name="view" title="Посмотреть текущее" type="secondary" />
        <Button name="go" title="Перейти...?" type="tertiary" />
      </ButtonsDiv>
    </Details>
  )
}

export default DetailsSesson

const Details = styled.div`
  & > div {
    max-width: 60rem;
    margin-bottom: 1rem;
  }
`

const DataDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > div {
    display: flex;
    align-items: center;
    padding-right: 1rem;
  }
`

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  & > button {
    margin-right: 1rem;
  }
`
