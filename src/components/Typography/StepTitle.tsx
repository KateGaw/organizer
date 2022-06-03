import styled from 'styled-components'

type Props = {
  title: string
  type: 'first' | 'second' | 'third'
}

const StepTitleText = ({ title, type = 'first' }: Props) => {
  return (() => {
    switch (type) {
      case 'first':
        return <FirstTitle>{title}</FirstTitle>
      case 'second':
        return <SecondTitle>{title}</SecondTitle>
      case 'third':
        return <ThirdTitle>{title}</ThirdTitle>
      default:
        return null
    }
  })()
}

export default StepTitleText

export const first = `font-size: 1.75rem; line-height: 2rem; font-weight: 500; letter-spacing: 0em;`
export const second = `font-size: 1.5rem; line-height: 1.5rem; font-weight: 500; letter-spacing: 0em;`
export const third = `font-size: 1.25rem; line-height: 1rem; font-weight: 500; letter-spacing: 0em;`

export const FirstTitle = styled.div`
  ${first}
  font-weight: 500;
  letter-spacing: 0em;
`

export const SecondTitle = styled.div`
  ${second}
  font-weight: 500;
  letter-spacing: 0em;
`

export const ThirdTitle = styled.div`
  ${third}
  font-weight: 500;
  letter-spacing: 0em;
`
