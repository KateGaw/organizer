import styled from 'styled-components'

type Props = {
  title: string
}

const SessionDescriptionText = ({ title }: Props) => {
  return <Component>{title}</Component>
}

export default SessionDescriptionText

const Component = styled.div`
  font-size: 36px;
  line-height: 48px;
  font-weight: 600;
  letter-spacing: 0em;
`
