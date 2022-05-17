import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import RadioButton from '../components/Inputs/RadioButton'
import Checkbox from '../components/Inputs/Checkbox'

export default {
  title: 'Docs / Inputs',
} as Meta

export const Variants = () => {
  const [radioButton, setRadioButton] = useState<string>('radio_button_1')
  const [checkbox, setCheckbox] = useState<string[]>(['checkbox_1'])

  const checkboxOnChange = (e: any) => {
    if (!checkbox.includes(e.target.name)) {
      setCheckbox([...checkbox, e.target.name])
    } else {
      setCheckbox(checkbox.filter((i: string) => i !== e.target.name))
    }
  }

  return (
    <div>
      <div className="radiobuttons">
        <div style={{ padding: 10 }}>
          <RadioButton
            name="radio_button_1"
            label="RadioButton 1"
            checked={radioButton === 'radio_button_1'}
            onChange={() => setRadioButton('radio_button_1')}
          />
        </div>
        <div style={{ padding: 10 }}>
          <RadioButton
            name="radio_button_2"
            label="RadioButton 2"
            checked={radioButton === 'radio_button_2'}
            onChange={() => setRadioButton('radio_button_2')}
          />
        </div>
      </div>

      <div style={{ padding: 10 }}>=======================================</div>

      <div className="checkbox">
        <div style={{ padding: 10 }}>
          <Checkbox
            name="checkbox_1"
            label="Checkbox 1"
            checked={checkbox.includes('checkbox_1')}
            onChange={checkboxOnChange}
          />
        </div>
        <div style={{ padding: 10 }}>
          <Checkbox
            name="checkbox_2"
            label="Checkbox 2"
            checked={checkbox.includes('checkbox_2')}
            onChange={checkboxOnChange}
          />
        </div>
      </div>
    </div>
  )
}
