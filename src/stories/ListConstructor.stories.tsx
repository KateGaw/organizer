import { Meta, Story } from '@storybook/react'
import SimpleList from '../components/Lists/SimpleList'

export default {
  title: 'Docs / ListsConstructor',
  component: SimpleList,
  argTypes: {
    listId: { type: 'string', defaultValue: 'listId' },
    editableTitle: { type: 'boolean', defaultValue: false },
    slider: { type: 'boolean', defaultValue: false },
    sort: { type: 'boolean', defaultValue: false },
    checkbox: { type: 'boolean', defaultValue: false },
    details: { type: 'boolean', defaultValue: false },
    displayParent: { type: 'boolean', defaultValue: false },

    data: [
      { name: 'id', required: true },
      { name: 'title', required: true },
      { name: 'details', required: false },
      { name: 'parents', required: false },
      { name: 'childs', required: false },
    ],
  },
} as Meta

const Template: Story<any> = (args: any) => <SimpleList {...args} />

export const Variants = Template.bind({})
Variants.args = {
  data: [
    {
      id: 'id_1',
      title: 'Заголовок первого уровня. Запись первая',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      parents: ['Прародитель 1', 'Прародитель 2'],
    },
    {
      id: 'id_2',
      title: 'Заголовок первого уровня. Запись вторая',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      parents: ['Прародитель 2.1', 'Прародитель 2.2'],
    },
    {
      id: 'id_3',
      title: 'Заголовок первого уровня. Запись третья',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      parents: ['Прародитель 3.1', 'Прародитель 3.2'],
      childs: [
        {
          id: 'id_3.1',
          title: 'Заголовок второго уровня. Запись первая',
          details:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          parents: ['Прародитель 1', 'Заголовок первого уровня. Запись 3'],
        },
      ],
    },
  ],
}
