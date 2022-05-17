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
