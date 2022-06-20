import React from 'react'
import { Meta, Story } from '@storybook/react'

import ButtonComponent from '../components/Buttons/index'

export default {
  title: 'Docs / Buttons',
  component: ButtonComponent,
  argTypes: {
    disabled: { type: 'boolean', defaultValue: false },
    title: { type: 'string', defaultValue: 'Hello world' },
    name: { type: 'string', defaultValue: 'name' },
    type: {
      name: 'type',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary', 'default'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta

const Template: Story<any> = (args: any) => (
  <div>
    <ButtonComponent {...args} />
  </div>
)

export const Variants = Template.bind({})
Variants.args = { type: 'primary' }

export const Transitions = () => {
  return (
    <div>
      <div className="buttons">
        <div style={{ padding: 15 }}>
          <ButtonComponent name="back" title="Назад" type="default" />
        </div>
        <div style={{ padding: 15 }}>
          <ButtonComponent
            name="next"
            title="Мне все нравится, идем дальше"
            type="primary"
          />
        </div>
      </div>
    </div>
  )
}
