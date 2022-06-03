/**
 * Кнопка "детали" для списка первого уровня
 *
 * Функции  - добавить запись ниже
 *          - переместить запись
 *          - удалить запись
 */

import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  listId: string
  dataId: string
  funcs: {
    delete: (id: string) => void
    add: (id: string) => void
  }
}

const DetailsButton = ({ listId, dataId, funcs }: Props) => {
  const [displaySettings, setDisplaySettings] = useState(false)

  const menu = [
    { _id: 'add', title: 'Добавить', onClick: () => funcs.add(dataId) },
    { _id: 'delete', title: 'Удалить', onClick: () => funcs.delete(dataId) },
  ]

  return (
    <DetailsWrapper>
      <ListDetailsButton
        onClick={() => setDisplaySettings(!displaySettings)}
        src="/images/icons/settings.svg"
        title="Настройки"
        alt="Настройки"
      />
      {displaySettings && (
        <SettingsMenu>
          {menu.map((i: any) => (
            <div key={i._id} onClick={i.onClick}>
              {i.title}
            </div>
          ))}
        </SettingsMenu>
      )}
    </DetailsWrapper>
  )
}

export default DetailsButton

const DetailsWrapper = styled.div`
  position: relative;
`

const ListDetailsButton = styled.img`
  height: 1.75rem;
  border: none;
  cursor: pointer;
`

const SettingsMenu = styled.div`
  position: absolute;
  z-index: 999;
  padding: 0.5rem 0.75rem;
  background-color: white;
  border-radius: 0.25rem;

  & > div {
    padding: 0 0 0.5rem;
    cursor: pointer;
  }
`
