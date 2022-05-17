import { Meta } from '@storybook/react'

import SessionNameText from '../components/Typography/SessionName'
import SessionDescriptionText from '../components/Typography/SessionDescription'
import StepTitleText from '../components/Typography/StepTitle'
import InstructionTitleText from '../components/Typography/InstructionTitle'
import InstructionTextText from '../components/Typography/InstructionText'
import MainText from '../components/Typography/Main'

export default {
  title: 'Docs / Typography',
} as Meta

export const Variants = () => (
  <div>
    <div style={{ padding: 20 }}>
      <SessionNameText title="Название сессии" />
    </div>
    <div style={{ padding: 20 }}>
      <SessionDescriptionText title="Описание сессии" />
    </div>
    <div style={{ padding: 20 }}>
      <StepTitleText title="Название шага" />
    </div>
    <div style={{ padding: 20 }}>
      <InstructionTitleText title="Заголовок инструкции" />
    </div>
    <div style={{ padding: 20 }}>
      <InstructionTextText title="Текст инструкции" />
    </div>
    <div style={{ padding: 20 }}>
      <MainText title="Основной текст" />
    </div>
  </div>
)
