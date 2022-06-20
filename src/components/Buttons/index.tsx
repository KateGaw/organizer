import styled from 'styled-components'

type ButtonTypesProps = 'primary' | 'secondary' | 'tertiary' | 'default'

type Props = {
  name: string
  onClick?: (e: any) => void
  title: string
  type: ButtonTypesProps
  styles?: any
}

const Button = ({ name, onClick, title, type, styles }: Props) => {
  return (
    <ButtonComponent name={name} onClick={onClick} styles={styles} btnType={type}>
      {title}
    </ButtonComponent>
  )
}

export default Button

const ButtonComponent = styled.button<{ btnType: ButtonTypesProps; styles?: any }>`
  padding: 0.25rem 0.5rem;
  font-size: 1.125rem;
  ${(props) => {
    switch (props.btnType) {
      case 'primary':
        return 'background: var(--color-primary); color: var(--color-black);'
      case 'secondary':
        return 'background: var(--color-secondary); color: var(--color-white);'
      case 'tertiary':
        return 'background: var(--color-tertiary); color: var(--color-black);'
      default:
        return 'background: var(--color-white); color: var(--color-black);'
    }
  }};
  box-shadow: 0 0.25rem 1.875rem rgba(51, 28, 32, 0.08);
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  user-select: none;

  :hover {
    filter: brightness(85%);
  }

  ${(props) => (props.styles ? props.styles : '')}
`
