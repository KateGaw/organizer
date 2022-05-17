import styled from 'styled-components'

type Props = {
  title: string
}

const StepTitleText = ({ title }: Props) => {
  return <Component>{title}</Component>
}

export default StepTitleText

const Component = styled.div`
  font-size: 32px;
  line-height: 36px;
  font-weight: 500;
  letter-spacing: 0em;
`
