import styled from 'styled-components'

type Props = {
  title: string
  styles?: any
}

const MainText = ({ title, styles }: Props) => {
  return <Component styles={styles}>{title}</Component>
}

export default MainText

const Component = styled.div<{ styles?: any }>`
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: 0em;
  ${(props) => (props.styles ? props.styles : '')}
`
