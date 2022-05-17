import { Meta } from '@storybook/react'
import styled from 'styled-components'
import colors from '../components/colors'

export default {
  title: 'Docs / Colors',
} as Meta

export const Colors = () => {
  return (
    <ColorPalette>
      {Object.entries(colors).map(([key, value]: any) => (
        <ColorItem key={key} color={value}>
          <div></div>
          <div>{key}</div>
        </ColorItem>
      ))}
    </ColorPalette>
  )
}

Colors.parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
}

const ColorPalette = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ColorItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;

  div:first-of-type {
    width: 40px;
    height: 40px;
    background-color: ${(p) => p.color};
    margin-right: 10px;
  }
`
