import styled from 'styled-components'

type Props = {
  title: string
}

const MainText = ({ title }: Props) => {
  return <Component>{title}</Component>
}

export default MainText

const Component = styled.div`
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: 0em;
`
