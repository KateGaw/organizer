import SimpleList from '../components/Lists/SimpleList'

export default {
  title: 'Docs / Lists',
}

// Простой список первого уровня
export const SimpleListStory = () => {
  const data = [
    { id: '1', title: 'Задача 1' },
    { id: '2', title: 'Задача 2' },
    { id: '3', title: 'Задача 3' },
    { id: '4', title: 'Задача 4' },
    { id: '5', title: 'Задача 5' },
    { id: '6', title: 'Задача 6' },
    { id: '7', title: 'Задача 7' },
  ]

  return <SimpleList listId="sinpleList" data={data} />
}

// Простой список первого уровня с возможностью редактирования
export const EditableSimpleListStory = () => {
  const data = [
    { id: '1', title: 'Задача 1' },
    { id: '2', title: 'Задача 2' },
    { id: '3', title: 'Задача 3' },
    { id: '4', title: 'Задача 4' },
    { id: '5', title: 'Задача 5' },
    { id: '6', title: 'Задача 6' },
    { id: '7', title: 'Задача 7' },
  ]

  return <SimpleList listId="sinpleList" data={data} editableTitle={true} />
}

// Простой список первого уровня со шкалой
export const SimpleListWithSliderStory = () => {
  const data = [
    { id: '1', title: 'Задача 1' },
    { id: '2', title: 'Задача 2' },
    { id: '3', title: 'Задача 3' },
    { id: '4', title: 'Задача 4' },
    { id: '5', title: 'Задача 5' },
    { id: '6', title: 'Задача 6' },
    { id: '7', title: 'Задача 7' },
  ]

  return <SimpleList listId="sinpleList" data={data} slider={true} />
}

// Простой список первого уровня со шкалой и ранжировкой
export const SimpleListWithSliderAndSortStory = () => {
  const data = [
    { id: '1', title: 'Задача 1' },
    { id: '2', title: 'Задача 2' },
    { id: '3', title: 'Задача 3' },
    { id: '4', title: 'Задача 4' },
    { id: '5', title: 'Задача 5' },
    { id: '6', title: 'Задача 6' },
    { id: '7', title: 'Задача 7' },
  ]

  return <SimpleList listId="sinpleList" data={data} slider={true} sort={true} />
}

// Простой список первого уровня со шкалой и чекбоксами
export const SimpleListWithSliderAndCheckboxesStory = () => {
  const data = [
    { id: '1', title: 'Задача 1' },
    { id: '2', title: 'Задача 2' },
    { id: '3', title: 'Задача 3' },
    { id: '4', title: 'Задача 4' },
    { id: '5', title: 'Задача 5' },
    { id: '6', title: 'Задача 6' },
    { id: '7', title: 'Задача 7' },
  ]

  return (
    <SimpleList
      listId="sinpleList"
      data={data}
      editableTitle={true}
      slider={true}
      checkbox={true}
    />
  )
}

// Простой список первого уровня со шкалой и детализацией
export const SimpleListWithSliderAndDetails = () => {
  const data = [
    {
      id: '1',
      title: 'Задача 1',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      id: '2',
      title: 'Задача 2',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    { id: '3', title: 'Задача 3', details: 'Lorem ipsum dolor sit amet' },
    {
      id: '4',
      title: 'Задача 4',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    { id: '5', title: 'Задача 5', details: 'Lorem' },
    { id: '6', title: 'Задача 6' },
    { id: '7', title: 'Задача 7' },
  ]

  return <SimpleList listId="sinpleList" data={data} slider={true} details={true} />
}

// Простой список первого уровня со шкалой и заголовками родителей
export const SimpleListWithSliderAndParents = () => {
  const data = [
    {
      id: '1',
      title: 'Задача 1. Редактор ролей пользователей',
      parents: [
        'Система управления пользователями и командами (административное)',
        'Система управления пользователями',
      ],
    },
    {
      id: '2',
      title: 'Задача 2. Добавление нового пользователя и назначение ему роли',
      parents: [
        'Система управления пользователями и командами (административное)',
        'Система управления пользователями',
      ],
    },
    {
      id: '3',
      title: 'Задача 3. Редактор списка пользователей',
      parents: [
        'Система управления пользователями и командами (административное)',
        'Система управления пользователями',
      ],
    },
    {
      id: '4',
      title: 'Задача 4. Редактор сведений о пользователе',
      parents: [
        'Система управления пользователями и командами (административное)',
        'Система управления пользователями',
      ],
    },
  ]

  return <SimpleList listId="sinpleList" data={data} slider={true} displayParent={true} />
}
