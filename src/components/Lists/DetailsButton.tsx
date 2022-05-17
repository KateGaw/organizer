/**
 * Кнопка "детали" для списка первого уровня
 */

import styled from 'styled-components'

type Props = { listId: string; dataId: string }

const DetailsButton = ({ listId, dataId }: Props) => {
  const detailsClick = () => {
    console.log('detailsClick', listId, dataId)
  }

  return <ListDetailsButton onClick={detailsClick}>Детали</ListDetailsButton>
}

export default DetailsButton

const ListDetailsButton = styled.button`
  margin-left: 1rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  line-height: 1.25rem;
  color: var(--color-white);
  background-color: var(--color-secondary);
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`
