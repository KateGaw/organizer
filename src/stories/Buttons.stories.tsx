import React from 'react'
import { Meta } from '@storybook/react'

import ButtonComponent from '../components/Buttons/index'

export default {
  title: 'Docs / Buttons',
} as Meta

export const Variants = () => {
  return (
    <div>
      <div className="buttons">
        <div style={{ padding: 15 }}>
          <ButtonComponent name="primary_button" title="Primary Button" type="primary" />
        </div>
        <div style={{ padding: 15 }}>
          <ButtonComponent
            name="secondary_button"
            title="Secondary Button"
            type="secondary"
          />
        </div>
        <div style={{ padding: 15 }}>
          <ButtonComponent
            name="tertiary_button"
            title="Tertiary Button"
            type="tertiary"
          />
        </div>
        <div style={{ padding: 15 }}>
          <ButtonComponent name="default_button" title="Default Button" type="default" />
        </div>
      </div>
    </div>
  )
}

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
