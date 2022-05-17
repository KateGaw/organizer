import styled from 'styled-components'

type Props = {
  title: string
}

const InstructionTitleText = ({ title }: Props) => {
  return <Component>{title}</Component>
}

export default InstructionTitleText

const Component = styled.div`
  font-size: 28px;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: 0em;
`
