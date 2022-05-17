import styled from 'styled-components'

type Props = {
  title: string
}

const InstructionTextText = ({ title }: Props) => {
  return <Component>{title}</Component>
}

export default InstructionTextText

const Component = styled.div`
  font-size: 21px;
  line-height: 28px;
  font-weight: 500;
  letter-spacing: 0em;
`
