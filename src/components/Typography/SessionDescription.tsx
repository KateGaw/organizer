import styled from 'styled-components'

type Props = {
  title: string
}

const SessionDescriptionText = ({ title }: Props) => {
  return <Component>{title}</Component>
}

export default SessionDescriptionText

const Component = styled.div`
  font-size: 1.75rem;
  line-height: 2rem;
  font-weight: 600;
  letter-spacing: 0em;
`
