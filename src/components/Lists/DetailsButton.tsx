/**
 * Кнопка "детали" для списка первого уровня
 *
 * Функции  - добавить запись ниже
 *          - переместить запись
 *          - удалить запись
 */

import React, { useState, createRef } from 'react'
import styled from 'styled-components'

type Props = {
  listId: string
  dataId: string
  index: number
  length: number
  funcs: {
    delete: (id: string) => void
    add: null | ((id: string) => void)
    top: (index: number, id: string) => void
    bottom: (index: number, id: string) => void
  }
}

const DetailsButton = ({ listId, dataId, funcs, index, length }: Props) => {
  const [displaySettings, setDisplaySettings] = useState(false)

  const menu = [
    funcs.add !== null
      ? {
          _id: 'add',
          title: 'Добавить',
          onClick: () => {
            if (funcs.add !== null) {
              funcs.add(dataId)
              setDisplaySettings(false)
            }
          },
        }
      : null,
    {
      _id: 'delete',
      title: 'Удалить',
      onClick: () => {
        funcs.delete(dataId)
        setDisplaySettings(false)
      },
    },
    index < length - 1
      ? {
          _id: 'bottom',
          title: 'Вниз',
          onClick: () => {
            funcs.bottom(index, dataId)
            setDisplaySettings(false)
          },
        }
      : null,
    index > 0
      ? {
          _id: 'top',
          title: 'Вверх',
          onClick: () => {
            funcs.top(index, dataId)
            setDisplaySettings(false)
          },
        }
      : null,
  ]

  const ref = createRef() as any
  const hideList = (e: any) => {
    if (ref.current && !ref.current.contains(e.target) && displaySettings) {
      setDisplaySettings(false)
    }
  }
  window.addEventListener('click', hideList)

  return (
    <DetailsWrapper ref={ref}>
      <ListDetailsButton
        onClick={() => setDisplaySettings(!displaySettings)}
        src="/images/icons/settings.svg"
        title="Настройки"
        alt="Настройки"
      />
      {displaySettings && (
        <SettingsMenu>
          {menu
            .filter((i: any) => i !== null)
            .map((i: any) => (
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
