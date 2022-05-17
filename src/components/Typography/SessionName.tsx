import styled from 'styled-components'

type Props = {
  title: string
}

const SessionNameText = ({ title }: Props) => {
  return <Component>{title}</Component>
}

export default SessionNameText

const Component = styled.div`
  font-size: 48px;
  line-height: 52px;
  font-weight: 900;
  letter-spacing: 0em;
`
